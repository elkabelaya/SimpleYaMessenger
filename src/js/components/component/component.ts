import {template as componentTemplate} from './component.tmpl';
import EventBus from '../../utils/event_bus/event_bus';
import Templator from '../../utils/templator/templator';
import {IComponentMeta, IComponent} from '../../components/icomponents/icomponent';
import {IComponentChild} from '../icomponents/icomponent_child';
import {stringKeyObject} from '../../utils/custom_types';

export default class Component implements IComponent {
	static EVENTS = {
		FLOW_INIT: 'flow:init',
		FLOW_CDM: 'flow:component-did-mount',
		FLOW_CDU: 'flow:component-did-update',
		FLOW_RENDER: 'flow:render'
	};

	_element: HTMLElement;
	_meta: IComponentMeta;
	_templator: Templator;
	_props: unknown;
	_eventBus: EventBus;
	_children: Array<IComponentChild<IComponent>> = [];

	constructor(attributes: unknown = {}, props: unknown = {}, children: Array<IComponentChild<IComponent>> = []) {
		const eventBus = new EventBus();
		this._meta = {
			attributes,
			props
		};
		this._templator = new Templator(this.template);
		this._eventBus = eventBus;
		this._registerEvents(eventBus);
		this.setChildren(children);
		this.setProps(props);
		eventBus.emit(Component.EVENTS.FLOW_INIT);
	}

	protected get tagName(): string {
		return 'div';
	}

	protected get template(): string {
		return componentTemplate;
	}

	_registerEvents(eventBus: EventBus) {
		eventBus.on(Component.EVENTS.FLOW_INIT, this.init.bind(this));
		eventBus.on(Component.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
		eventBus.on(Component.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
	}

	_createResources() {
		this._element = this._createDocumentElement(this.tagName, this._meta.attributes);
	}

	init() {
		this._createResources();
		this._eventBus.emit(Component.EVENTS.FLOW_CDM);
	}

	_componentDidMount() {
		this.componentDidMount();
		this._eventBus.emit(Component.EVENTS.FLOW_CDU, {}, this._props);
	}

	// Может переопределять пользователь, необязательно трогать
	componentDidMount() {
        // eslint-disable-line
	}

	_componentDidUpdate(oldProps: unknown, newProps: unknown) {
		if (this.componentDidUpdate(oldProps, newProps)) {
			this._render();
		}
	}

	// Может переопределять пользователь, необязательно трогать
	componentDidUpdate(oldProps: unknown, newProps: unknown) {
		return oldProps !== newProps;
	}

	setProps(nextProps: unknown) {
		if (!nextProps) {
			return;
		}

		const oldProps: unknown = Object.assign({}, this._props || {});
		console.log('setProps', oldProps);

		this._props = this._makePropsProxy(Object.assign(this._props || {}, nextProps));
		setChildProps(nextProps as stringKeyObject, this._children);

		this._eventBus.emit(Component.EVENTS.FLOW_CDU, oldProps, this._props);
	}

	setChildren(children: Array<IComponentChild<IComponent>>) {
		const oldChildren = this._children;
		this._children = children || [];
		this._eventBus.emit(Component.EVENTS.FLOW_CDU, oldChildren, this._children);
	}

	get element(): HTMLElement {
		return this._element;
	}

	_render() {
		if (!this._element) {
			return;
		}

		this.render();
		this._eventBus.emit(Component.EVENTS.FLOW_RENDER);
	}

	render() {
		// TODO: переделать, при смене props нужно перерендеривать только child-ны,
		// сейчас меняется весь родительский компонент

		this._element.innerHTML = '';
		const compiled = this._templator.compile(this._props);
		let query;
		while (compiled.length) {
			this._element.appendChild(compiled[0]);
		}

		for (const child of this._children) {
			query = this._element.querySelector(child.rootElement);
			if (query) {
				/* eslint-disable-next-line new-cap */
				child.componentInstance = new child.componentClass(child.componentCtx, child.componentAttrs);
				query.appendChild(child.componentInstance.element);
			}
		}
	}

	_makePropsProxy(props: unknown) {
		/* eslint-disable-next-line @typescript-eslint/ban-types */
		return new Proxy(props as object, {
			deleteProperty() {
				throw new Error('error');
			}
		});
	}

	_createDocumentElement(tagName: string, attributes: any) {
		const element = document.createElement(tagName);
		Object.keys(attributes).forEach(item => {
			element.setAttribute(item, attributes[item]);
		});

		return element;
	}

	show() {
		this.element.style.display = 'block';
	}

	hide() {
		this.element.style.display = 'none';
	}
}

function setChildProps(props: stringKeyObject, children: Array<IComponentChild<IComponent>>): void {
	props = Object.assign({}, props);
	children.forEach(child => {
		const componentCtx = child.componentCtx as stringKeyObject;
		const name: string = componentCtx.name as unknown as string;
		if (name && props[name]) {
			child.componentCtx = Object.assign(child.componentCtx, {value: props[name]});
		}
	});
}
