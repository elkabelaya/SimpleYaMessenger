import Avatar from './components/avatar/avatar';
import Button from './components/button/button';
import ChatItem from './components/chat_item/chat_item';
import Input from './components/input/input';
import WidgetHeader from './components/widget_header/widget_header';
import Router from './utils/router/router';
import AccountWidget from './widgets/account_widget/account_widget';
import ChatListWidget from './widgets/chat_list_widget/chat_list_widget';
import LoginWidget from './widgets/login_widget/login_widget';
import MessengerWidget from './widgets/messenger_widget/messenger_widget';
import RegisterWidget from './widgets/register_widget/register_widget';

new Router(".app")
.use("/login_widget/", LoginWidget)
.use("/register_widget/", RegisterWidget)
.use("/account_widget/", AccountWidget)
.use("/messenger_widget/", MessengerWidget)
.use("/avatar/", Avatar)
.use("/widget_header/", WidgetHeader)
.use("/input/", Input)
.use("/button/", Button)
.use("/chat_list/", ChatListWidget)
.use("/chat_item/", ChatItem)
.use("/error_404/", ChatItem)
.use("/chat_item/", ChatItem)
.start();
