import {accountService} from 'services/service_instances';
import {template as itemTemplate} from 'widgets/account_widget/account_widget.tmpl';
import FormWidget from 'widgets/form_widget/form_widget';
import {initData} from 'widgets/account_widget/account_widget.init';
import {userStoreInstance} from 'stores/store_instances';
import 'widgets/account_widget/account_widget.less';

export default class AccountWidget extends FormWidget {
	constructor() {
		super({}, {}, initData);
		this.setProps(userStoreInstance.get());
		userStoreInstance.on('change', () => {
			this.setProps(userStoreInstance.get());
		});
	}

	render() {
		super.render();
		const service = accountService;
		service.start(this.element.querySelector('form')!);
	}

	get tagName() {
		return 'div';
	}

	get template() {
		return itemTemplate;
	}
}
