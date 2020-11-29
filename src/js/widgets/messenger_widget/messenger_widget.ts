import {template as itemTemplate} from './messenger_widget.tmpl';
import {IComponent} from '../../components/icomponents/icomponent';
import Component from '../../components/component/component';
import {IComponentChild} from '../../components/icomponents/icomponent_child';
import ChatListWidget from '../chat_list_widget/chat_list_widget';
import MessagesWidget from '../messages_widget/messages_widget';
import './messenger_widget.less';

export default class MessengerWidget extends Component {
	constructor(chats: unknown[] = [], messages: unknown[] = []) {
		const data: Array<IComponentChild<IComponent>> = [
			{
				componentClass: ChatListWidget,
				componentCtx: chats,
				rootElement: '.widget-chat-list',
				componentAttrs: {}
			},
			{
				componentClass: MessagesWidget,
				componentCtx: messages,
				rootElement: '.widget-chat-chat',
				componentAttrs: {}
			}
		];

		super({}, {}, data);
	}

	get tagName() {
		return 'div';
	}

	get template() {
		return itemTemplate;
	}
}
