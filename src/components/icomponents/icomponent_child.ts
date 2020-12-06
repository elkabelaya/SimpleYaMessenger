import {IComponent} from './icomponent';

export interface IComponentChild<T> {
	componentName?: string;
	componentClass: INewableComponent<T>;
	componentInstance?: IComponent;
	componentCtx: unknown | unknown[];
	componentAttrs: unknown;
	rootElement: string;
}

export type INewableComponent<T> = new(...props: any[]) => T;
