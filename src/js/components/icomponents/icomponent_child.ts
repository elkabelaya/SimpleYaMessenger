import { IComponent } from "./icomponent";



export interface  IComponentChild<T> {
  componentName?: string,
  componentClass: INewableComponent<T>,
  componentInstance?: IComponent,
  componentCtx: object | object[],
  componentAttrs: object,
  rootElement: string,
}


export interface INewableComponent<T> {
	new( ...props: any[] ): T;
}
