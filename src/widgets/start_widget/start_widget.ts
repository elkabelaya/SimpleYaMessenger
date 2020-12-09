import {template as itemTemplate} from 'widgets/start_widget/start_widget.tmpl';
import FormWidget from 'widgets/form_widget/form_widget';
import {checkAuthService} from 'services/service_instances';
import 'utils/less/base.less';

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
