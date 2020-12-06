import Avatar from './components/avatar/avatar';
import Button from './components/button/button';
import ChatItem from './components/chat_item/chat_item';
import Input from './components/input/input';
import WidgetHeader from './components/widget_header/widget_header';
import Router from './utils/router/router';

import {
	ROUTE_ACCOUNT,
	ROUTE_ERROR_404,
	ROUTE_LOGIN,
	ROUTE_MESSENGER,
	ROUTE_REGISTER,
	ROUTE_CREATE_CHAT,
	ROUTE_SAMPLE_AVATAR,
	ROUTE_SAMPLE_BUTTON,
	ROUTE_SAMPLE_CHATLIST,
	ROUTE_SAMPLE_CHATITEM,
	ROUTE_SAMPLE_HEADER,
	ROUTE_SAMPLE_INPUT,
	ROUTE_UNKNOWN
} from './utils/router/routes';
import AccountWidget from './widgets/account_widget/account_widget';
import ChatListWidget from './widgets/chat_list_widget/chat_list_widget';
import ErrorWidget from './widgets/error404_widget/error404_widget';
import LoginWidget from './widgets/login_widget/login_widget';
import MessengerWidget from './widgets/messenger_widget/messenger_widget';
import CreateChatWidget from './widgets/chat_create_widget/chat_create_widget';
import RegisterWidget from './widgets/register_widget/register_widget';
import StartWidget from './widgets/start_widget/start_widget';

new Router('.app', ROUTE_ERROR_404)
	.use(ROUTE_UNKNOWN, StartWidget)
	.use(ROUTE_LOGIN, LoginWidget)
	.use(ROUTE_REGISTER, RegisterWidget)
	.use(ROUTE_ACCOUNT, AccountWidget)
	.use(ROUTE_MESSENGER, MessengerWidget)
	.use(ROUTE_CREATE_CHAT, CreateChatWidget)
	.use(ROUTE_SAMPLE_AVATAR, Avatar)
	.use(ROUTE_SAMPLE_HEADER, WidgetHeader)
	.use(ROUTE_SAMPLE_INPUT, Input)
	.use(ROUTE_SAMPLE_BUTTON, Button)
	.use(ROUTE_SAMPLE_CHATLIST, ChatListWidget)
	.use(ROUTE_SAMPLE_CHATITEM, ChatItem)
	.use(ROUTE_ERROR_404, ErrorWidget)
	.start();
