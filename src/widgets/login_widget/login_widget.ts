import {template as loginWidgetTemplate} from 'widgets/login_widget/login_widget.tmpl';
import FormWidget from 'widgets/form_widget/form_widget';
import {initData} from 'widgets/login_widget/login_widget.init';
import {loginService} from 'services/service_instances';
import 'widgets/login_widget/login_widget.less';

export default class LoginWidget extends FormWidget {
	constructor() {
		super({}, {}, initData);
	}

	render() {
		super.render();
		const service = loginService;
		service.start(this.element.querySelector('form')!);
	}

	get tagName() {
		return 'div';
	}

	get template() {
		return loginWidgetTemplate;
	}
}
