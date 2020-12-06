import {createChatsService} from '../../services/service_instances';
import {template as itemTemplate} from './chat_create_widget.tmpl';
import FormWidget from '../form_widget/form_widget';
import {initData} from './chat_create_widget.init';
import {userStoreInstance} from '../../stores/store_instances';
import './chat_create_widget.less';

export default class CreateChatWidget extends FormWidget {
	constructor() {
		super({}, {}, initData);
	}

	render() {
		super.render();
		const service = createChatsService;
		service.start(this.element.querySelector('form')!);
	}

	get tagName() {
		return 'div';
	}

	get template() {
		return itemTemplate;
	}
}
