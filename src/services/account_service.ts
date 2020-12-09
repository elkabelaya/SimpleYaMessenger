import {IApi} from 'api/iapi/iapi';
import {IStore} from 'stores/istore';
import UserAPI from 'api/user_api';
import FormService from 'services/form_service';

export default class AccountService extends FormService {
	private readonly _updateApi: UserAPI;
	private _avatarInput?: HTMLInputElement;

	constructor(store: IStore, requestApi: IApi, updateApi: UserAPI) {
		super(store, requestApi);

		this._updateApi = updateApi;
	}

	start(form: HTMLFormElement) {
		super.start(form);

		this._avatarInput = form?.elements.namedItem('avatar') as HTMLInputElement;
		this._avatarInput?.addEventListener('change', this.handleAvatar.bind(this));
		if (this._store.get()) {
			return;
		}

		this._api.update().then(xhr => {
			this._store.set(JSON.parse(xhr.response));
		}).catch(_xhr => {
			this._store.set({});
		});
	}

	submit(_data: any) {
		let promises = [this._updateApi.update(_data)];
		const file = this._avatarInput?.files?.length ? this._avatarInput.files[0] : null;
		if (file) {
			let formData = new FormData();
			formData.append('avatar', file);
			promises.push(this._updateApi.updateAvatar(formData));
		}

		if (_data.old_password !== _data.newpassword) {
			promises.push(this._updateApi.updatePassword({oldpassword: _data.old_password, newpassword: _data.new_password}));
		}

		Promise.all(promises)
			.then(_dataxhr => {
				this.onSuccess();
			})
			.catch(xhr => {
				this.onError(xhr);
			});
	}

	handleAvatar(event: Event) {
		const inputElement = event?.target as HTMLInputElement;
		const file = inputElement?.files?.length ? inputElement.files[0] : null;

		if (file) {
			var reader = new FileReader();
			reader.onload = () => {
				const imgs = this._form?.getElementsByTagName('img');
				const img = imgs?.length ? imgs[0] : undefined;
				if (img) {
					img.src = reader.result as string;
				}
			};

			reader?.readAsDataURL(file);
		}
	}

	private onSuccess() {
		// Do nothing
	}

	private onError(_xhr: XMLHttpRequest) {

		// TODO отображение ошибки
	}
}
