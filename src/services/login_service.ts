import {IApi} from 'api/iapi/iapi';
import {IStore} from 'stores/istore';
import Router from 'utils/router/router';
import FormService from 'services/form_service';
import {ROUTE_LOGIN, ROUTE_MESSENGER} from 'utils/router/routes';
import {stringKeyString} from 'utils/custom_types';

export default class LoginService extends FormService {
	submit(_data: stringKeyString) {
		this._api.request(_data)
			.then(xhr => {
				this.onSuccess(xhr);
			})
			.catch(xhr => {
			// TODO call onError
			// сейчас иногда 401 на только что созданного юзера
				if (true) {
					this.onSuccess(xhr);
				} else {
					this.onError(xhr);
				}
			});
	}

	private onSuccess(xhr: XMLHttpRequest) {
		this._store.set(JSON.parse(xhr.response));
		(new Router()).go(ROUTE_MESSENGER);
	}

	private onError(_xhr: XMLHttpRequest) {
		this._store.set({});
		(new Router()).go(ROUTE_LOGIN);
	}
}
