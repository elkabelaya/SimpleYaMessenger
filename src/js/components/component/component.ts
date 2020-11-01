import {template as componentTemplate} from "./component.tmpl.js"
import EventBus from "../../utils/event_bus/event_bus.js"
import Templator from "../../utils/templator/templator.js"
import {IComponentMeta, IComponent} from "../../components/icomponents/icomponent.js"
import { IComponentChild } from "../icomponents/icomponent_child.js";


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

  constructor(tagName: string = "div", template: string = componentTemplate,
              attributes: object = {}, props: object = {},
              templator: Templator = new Templator(template), children:IComponentChild<IComponent>[]=[]) {


   const eventBus = new EventBus();
    this._meta = {
      tagName,
      attributes,
      props
    };
    this._templator = templator;
    this._props = this._makePropsProxy(props);

    this._eventBus = eventBus;
    this._children = children;
    this._registerEvents(eventBus);
    eventBus.emit(Component.EVENTS.FLOW_INIT);
  }

  _registerEvents(eventBus:EventBus) {

    eventBus.on(Component.EVENTS.FLOW_INIT, this.init.bind(this));
    eventBus.on(Component.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Component.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));

  }

  _createResources() {
    this._element = this._createDocumentElement(this._meta.tagName, this._meta.attributes);
  }

  init() {
    this._createResources();
    this._eventBus.emit(Component.EVENTS.FLOW_CDM);
  }

  _componentDidMount() {
  	this.componentDidMount();
    this._eventBus.emit(Component.EVENTS.FLOW_CDU, null, this._props);
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
    while(compiled.length){
      this._element.appendChild(compiled[0]);
    }
    //let documentFragment: DocumentFragment = document.createDocumentFragment()

    for (let child of this._children){
      query = this._element.querySelector(child.rootElement);
      if (!!query){
        this._element.querySelector(child.rootElement).appendChild( new child.componentClass(child.componentCtx,child.componentAttrs).element);
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

  _createDocumentElement(tagName: string, attributes: object) {
    let element =  document.createElement(tagName);

    for (let attribute in attributes){
      element.setAttribute(attribute, attributes[attribute]);
    }
    return element;
  }

  show() {
    this.element.style.display = "block";
  }

  hide() {
    this.element.style.display = "none";
  }
}
