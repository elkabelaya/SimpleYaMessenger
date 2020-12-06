import {IEventBus} from '../utils/event_bus/ievent_bus';

export interface IStore extends IEventBus{

	get(selector?: string): unknown|unknown[];
	set(value: unknown|unknown[], selector?: string): void;
}
