
import {template as loginWidgetTemplate} from './register_widget.tmpl';

import Component from '../../components/component/component';
import {dataInit} from './register_widget.init';
import {registerService} from '../../services/service_instances';
import './register_widget.less';

export default class RegisterWidget extends Component {
	constructor() {
		super({}, {}, dataInit);
	}

	render() {
		super.render();
		const service = registerService;
		service.start(this.element.querySelector('form')!);
	}

	get tagName() {
		return 'div';
	}

	get template() {
		return loginWidgetTemplate;
	}
}
