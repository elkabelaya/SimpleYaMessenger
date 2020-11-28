import {IComponent} from './icomponent';

export interface IComponentChild<T> {
	componentName?: string;
	componentClass: INewableComponent<T>;
	componentInstance?: IComponent;
	componentCtx: Record<string, unknown> | Array<Record<string, unknown>>;
	componentAttrs: Record<string, unknown>;
	rootElement: string;
}

export type INewableComponent<T> = new(...props: any[]) => T;
