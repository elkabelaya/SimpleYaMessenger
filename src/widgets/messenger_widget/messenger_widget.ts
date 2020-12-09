import {template as itemTemplate} from 'widgets/messenger_widget/messenger_widget.tmpl';
import {IComponent} from 'components/icomponents/icomponent';
import Component from 'components/component/component';
import {IComponentChild} from 'components/icomponents/icomponent_child';
import {initData} from 'widgets/messenger_widget/messenger_widget.init';
import 'widgets/messenger_widget/messenger_widget.less';

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
