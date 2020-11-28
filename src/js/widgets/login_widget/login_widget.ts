
import {template as loginWidgetTemplate} from './login_widget.tmpl';
import FormWidget from '../form_widget/form_widget';
import {initData} from './login_widget.init';
import {loginService} from '../../services/service_instances';
import './login_widget.less';

export default class LoginWidget extends FormWidget {
	constructor() {
		super({}, {}, initData);
	}

	render() {
		super.render();
		let service = loginService;
		service.start(this.element.querySelector('form'));
	}

	get tagName() {
		return 'div';
	}

	get template() {
		return loginWidgetTemplate;
	}
}
