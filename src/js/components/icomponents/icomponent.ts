import  Store from "../../stores/store"
export interface IComponent {
  readonly element: HTMLElement,
  init(): void,
  render(): void,
  show(): void,
  hide(): void,
  setProps(nextProps: object): void,
  componentDidMount(oldProps:object): void,
  componentDidMount(oldProps:object): void,
  componentDidUpdate(oldProps:object, newProps:object): void,
}

export interface  IComponentMeta {
  attributes:object,
  props:object
}

export interface  IStoreCtx {
  store:Store,
  storeSelector?:string,
}
