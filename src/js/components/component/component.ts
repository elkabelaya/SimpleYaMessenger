import {template as componentTemplate} from "./component.tmpl"
import EventBus from "../../utils/event_bus/event_bus"
import Templator from "../../utils/templator/templator"
import {IComponentMeta, IComponent} from "../../components/icomponents/icomponent"
import { IComponentChild } from "../icomponents/icomponent_child";


export default class Component implements IComponent{
  static EVENTS = {
    FLOW_INIT: "flow:init",
    FLOW_CDM: "flow:component-did-mount",
    FLOW_CDU: "flow:component-did-update",
    FLOW_RENDER: "flow:render"
  };

  _element: HTMLElement;
  _meta: IComponentMeta;
  _templator:Templator;
  _props: object;
  _eventBus:EventBus;
  _children:IComponentChild<IComponent>[];

  constructor(attributes: object = {}, props: object = {}, children:IComponentChild<IComponent>[]=[]) {


   const eventBus = new EventBus();
    this._meta = {
      attributes,
      props
    };
    this._templator = new Templator(this.template);
    this._props = this._makePropsProxy(props);

    this._eventBus = eventBus;
    this._children = children;
    this._registerEvents(eventBus);
    eventBus.emit(Component.EVENTS.FLOW_INIT);
  }
  protected get tagName(): string {
    return "div";
  }

  protected get template(): string {
    return componentTemplate;
  }

  _registerEvents(eventBus:EventBus) {

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
  componentDidMount() {}

  _componentDidUpdate(oldProps: object, newProps: object) {

    if(this.componentDidUpdate(oldProps, newProps)){
       this._render();
    }
  }

	// Может переопределять пользователь, необязательно трогать
  componentDidUpdate(oldProps: object, newProps: object) {
    return oldProps != newProps;
  }

  setProps(nextProps: object) {

    if (!nextProps) {
      return;
    }
    let oldProps: object = Object.assign({},this._props);

    this._props = Object.assign(this._props, nextProps);
    this._eventBus.emit(Component.EVENTS.FLOW_CDU, oldProps, this._props);
  };

  setChildren(children: IComponentChild<IComponent>[]) {
    let oldChildren = this._children;
    this._children = children;
    this._eventBus.emit(Component.EVENTS.FLOW_CDU, oldChildren, this._children);
  };

  get element(): HTMLElement  {
    return this._element;
  }

  _render() {
    this.render();
    this._eventBus.emit(Component.EVENTS.FLOW_RENDER);
  }

  render() {
    this._element.innerHTML = "";
    const compiled = this._templator.compile(this._props);
    let query;
    let component:HTMLElement;
    while(compiled.length){
      this._element.appendChild(compiled[0]);
    }

    for (let child of this._children){
      query = this._element.querySelector(child.rootElement);
      if (!!query){
        component = new child.componentClass(child.componentCtx,child.componentAttrs).element;
        query.appendChild( component );
      }
    }
    //return element;

  }


  _makePropsProxy(props: object) {
    return new Proxy(props,{
      deleteProperty(){
        throw new Error("error");
      }
    })
  }

  _createDocumentElement(tagName: string, attributes: any) {
    let element =  document.createElement(tagName);
    Object.keys(attributes).forEach(item => {
        element.setAttribute(item, attributes[item]);
    });

    return element;
  }

  show() {
    this.element.style.display = "block";
  }

  hide() {
    this.element.style.display = "none";
  }
}
