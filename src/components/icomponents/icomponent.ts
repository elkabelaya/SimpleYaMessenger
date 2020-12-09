import Store from 'stores/store';

export interface IComponent {
	readonly element: HTMLElement;
	init(): void;
	render(): void;
	show(): void;
	hide(): void;
	setProps(nextProps: unknown): void;
	componentDidMount(oldProps: unknown): void;
	componentDidMount(oldProps: unknown): void;
	componentDidUpdate(oldProps: unknown, newProps: unknown): void;
}

export interface IComponentMeta {
	attributes: unknown;
	props: unknown;
}

export interface IStoreCtx {
	store: Store;
	storeSelector?: string;
}
