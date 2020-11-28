export type IEventBusCallbackFunction = (...args: Array<Record<string, unknown>>) => void;

export interface IEventBus {
	on(event: string, callback: IEventBusCallbackFunction): void;
	off(event: string, callback: IEventBusCallbackFunction): void;
	emit(event: string, ...args: Array<Record<string, unknown>>): void;
}
