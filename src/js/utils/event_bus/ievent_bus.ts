export type IEventBusCallbackFunction = (...args: unknown[]) => void;

export interface IEventBus {
	on(event: string, callback: IEventBusCallbackFunction): void;
	off(event: string, callback: IEventBusCallbackFunction): void;
	emit(event: string, ...args: unknown[]): void;
}
