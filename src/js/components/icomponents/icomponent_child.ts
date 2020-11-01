


export interface  IComponentChild<T> {
  componentClass: INewableComponent<T>,
  componentCtx: object | object[],
  componentAttrs: object,
  rootElement: string,
}


export interface INewableComponent<T> {
	new( ...props: any[] ): T;
}
