import {IApi} from '../api/iapi/iapi';
import {IStore} from '../stores/istore';

export default class BaseService {
	protected _store: IStore;
	protected _api: IApi;

	constructor(store: IStore, api: IApi) {
		this._store = store;
		this._api = api;
	}
}
