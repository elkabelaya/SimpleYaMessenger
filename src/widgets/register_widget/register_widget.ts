import {template as loginWidgetTemplate} from 'widgets/register_widget/register_widget.tmpl';
import Component from 'components/component/component';
import {dataInit} from 'widgets/register_widget/register_widget.init';
import {registerService} from 'services/service_instances';
import 'widgets/register_widget/register_widget.less';

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
