import ChatListWidget from 'widgets/chat_list_widget/chat_list_widget';
import MessagesWidget from 'widgets/messages_widget/messages_widget';
import {IComponent} from 'components/icomponents/icomponent';
import {IComponentChild} from 'components/icomponents/icomponent_child';

export const initData: Array<IComponentChild<IComponent>> = [
	{
		componentClass: ChatListWidget,
		componentCtx: [],
		rootElement: '.widget-chat-list',
		componentAttrs: {}
	},
	{
		componentClass: MessagesWidget,
		componentCtx: [],
		rootElement: '.widget-chat-chat',
		componentAttrs: {}
	}
];
