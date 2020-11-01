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
  tagName:string,
  attributes:object,
  props:object
}
