import Router from 'utils/router/router';
import FormService from 'services/form_service';
import {ROUTE_LOGIN} from 'utils/router/routes';
import {stringKeyString} from 'utils/custom_types';

export default class LogoutService extends FormService {
	submit(_data: stringKeyString) {
		this._api.request(_data)
			.then(xhr => {
				this.onSuccess(xhr);
			})
			.catch(xhr => {
				this.onError(xhr);
			});
	}

	private onSuccess(xhr: XMLHttpRequest) {
		this._store.set(JSON.parse(xhr.response));
		(new Router()).go(ROUTE_LOGIN);
	}

	private onError(_xhr: XMLHttpRequest) {
		// TODO error message
	}
}
