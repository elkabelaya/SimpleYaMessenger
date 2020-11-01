import { template as itemTemplate } from "./messenger_widget.tmpl.js";
import Component from "../../components/component/component.js";
import ChatListWidget from "../chat_list_widget/chat_list_widget.js";
import MessagesWidget from "../messages_widget/messages_widget.js";
//import style from "../../../css/account_widget.css";
export default class MessengerWidget extends Component {
    constructor(chats = [], messages = []) {
        let data = [
            {
                componentClass: ChatListWidget,
                componentCtx: chats,
                rootElement: ".widget-chat-list"
            },
            {
                componentClass: MessagesWidget,
                componentCtx: messages,
                rootElement: ".widget-chat-chat"
            },
        ];
        super(undefined, itemTemplate, undefined, undefined, undefined, data);
    }
}
