import {template as itemTemplate} from './messenger_widget.tmpl';
import {IComponent} from '../../components/icomponents/icomponent';
import Component from '../../components/component/component';
import {IComponentChild} from '../../components/icomponents/icomponent_child';
import {initData} from './messenger_widget.init';
import './messenger_widget.less';

export default class MessengerWidget extends Component {
	constructor(chats: unknown[] = [], messages: unknown[] = []) {
		super({}, {}, initData);
	}

	get tagName() {
		return 'div';
	}

	get template() {
		return itemTemplate;
	}
}
