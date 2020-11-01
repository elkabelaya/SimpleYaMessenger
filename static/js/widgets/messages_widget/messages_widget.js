import { template as itemTemplate } from "./messages_widget.tmpl.js";
import Component from "../../components/component/component.js";
import Message from "../../components/message/message.js";
//import style from "../../../css/account_widget.css";
export default class MessagesWidget extends Component {
    constructor(chats = []) {
        let data = new Array(chats.length);
        for (let i = 0; i < chats.length; i++) {
            data[i] = ({
                componentClass: Message,
                componentCtx: chats[i],
                rootElement: ".widget-chat-list__items"
            });
        }
        super(undefined, itemTemplate, { class: "widget-chat-chat__content" }, undefined, undefined, data);
    }
}
