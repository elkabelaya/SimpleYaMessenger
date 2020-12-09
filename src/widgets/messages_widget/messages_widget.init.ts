import {IComponent} from 'components/icomponents/icomponent';
import {IComponentChild} from 'components/icomponents/icomponent_child';
import ChatHeaderWidget from 'widgets/chat_header_widget/chat_header_widget';
import ChatReadWidget from 'widgets/chat_read_widget/chat_read_widget';
import ChatSendWidget from 'widgets/chat_send_widget/chat_send_widget';

export const initData: Array<IComponentChild<IComponent>> = [
	{
		componentClass: ChatHeaderWidget,
		componentCtx: {},
		rootElement: '.widget-chat-chat__header',
		componentAttrs: {}
	},
	{
		componentClass: ChatReadWidget,
		componentCtx: [],
		rootElement: '.widget-chat-chat__items',
		componentAttrs: {}
	},
	{
		componentClass: ChatSendWidget,
		componentCtx: [],
		rootElement: '.widget-chat-chat__send',
		componentAttrs: {}
	}
];
