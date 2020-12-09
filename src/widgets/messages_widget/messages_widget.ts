import {template as itemTemplate} from 'widgets/messages_widget/messages_widget.tmpl';
import {initData} from 'widgets/messages_widget/messages_widget.init';
import {IComponent} from 'components/icomponents/icomponent';
import {IComponentChild} from 'components/icomponents/icomponent_child';
import Message from 'components/message/message';
import FormWidget from 'widgets/form_widget/form_widget';
import 'widgets/messages_widget/messages_widget.less';

export default class MessagesWidget extends FormWidget {
	constructor() {
		super({class: 'widget-chat-chat__chat'}, undefined, initData);
	}

	get tagName() {
		return 'div';
	}

	get template() {
		return itemTemplate;
	}
}
