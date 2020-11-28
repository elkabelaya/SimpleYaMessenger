import Store from '../../stores/store';
export interface IComponent {
	readonly element: HTMLElement;
	init(): void;
	render(): void;
	show(): void;
	hide(): void;
	setProps(nextProps: Record<string, unknown>): void;
	componentDidMount(oldProps: Record<string, unknown>): void;
	componentDidMount(oldProps: Record<string, unknown>): void;
	componentDidUpdate(oldProps: Record<string, unknown>, newProps: Record<string, unknown>): void;
}

export interface IComponentMeta {
	attributes: Record<string, unknown>;
	props: Record<string, unknown>;
}

export interface IStoreCtx {
	store: Store;
	storeSelector?: string;
}
