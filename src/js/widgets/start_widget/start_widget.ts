
import {template as itemTemplate} from './start_widget.tmpl';
import FormWidget from '../form_widget/form_widget';
import {checkAuthService} from '../../services/service_instances';
import '../../../less/base.less';

export default class StartWidget extends FormWidget {
	constructor() {
		super({}, {});
	}

	render() {
		super.render();
		let service = checkAuthService;
		service.start();
	}

	get tagName() {
		return 'div';
	}

	get template() {
		return itemTemplate;
	}
}
