import {getValueFromObject} from '../utils/data/data_helpers';
import EventBus from '../utils/event_bus/event_bus';
import {IStore} from './istore';

export default class Store extends EventBus implements IStore {
	private _data: Record<string, unknown>;

	get(selector?: string): unknown|unknown[] {
		return selector ? getValueFromObject(selector, this._data) : this._data;
	}

	set(value: Record<string, unknown>, selector?: string): void {
		if (selector) {
			if (!this._data) {
				this._data = {};
			}

			this._data[selector] = value;
		} else {
			this._data = value;
		}

		this.emit('change', selector);
	}
}
