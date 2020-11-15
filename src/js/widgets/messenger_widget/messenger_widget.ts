import {template as itemTemplate} from "./messenger_widget.tmpl"
import { IComponent } from "../../components/icomponents/icomponent";
import Component from "../../components/component/component";
import { IComponentChild } from "../../components/icomponents/icomponent_child";
import ChatListWidget from "../chat_list_widget/chat_list_widget";
import MessagesWidget from "../messages_widget/messages_widget";

//import style from "../../../css/account_widget.css";

export default class MessengerWidget extends Component {

  constructor(chats:object[] = [], messages:object[] = []) {
    let data:IComponentChild<IComponent>[] = [
      {
        componentClass: ChatListWidget,
        componentCtx: chats,
        rootElement:".widget-chat-list",
        componentAttrs:{}
      },
      {
        componentClass: MessagesWidget,
        componentCtx: messages,
        rootElement:".widget-chat-chat",
        componentAttrs:{}
      },
    ];


    super("div", itemTemplate, {}, {}, undefined, data);
  }
}
