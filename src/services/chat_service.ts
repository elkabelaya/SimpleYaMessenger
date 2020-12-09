import BaseService from 'services/base_service';

export default class ChatService extends BaseService {
	start() {
		this._api.update()
			.then(xhr => {
				this._store.set(JSON.parse(xhr.response));
			})
			.catch(_xhr => {
				this._store.set({});
			});
	}
}
