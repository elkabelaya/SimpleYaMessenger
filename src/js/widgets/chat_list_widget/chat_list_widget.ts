
import Input from  "../../components/input/input.js";
import Button from  "../../components/button/button.js";
import ChatItem from  "../../components/chat_item/chat_item.js";
import {template as itemTemplate} from "./chat_list_widget.tmpl.js"
import { IComponent } from "../../components/icomponents/icomponent.js";
import Component from "../../components/component/component.js";
import { IComponentChild } from "../../components/icomponents/icomponent_child.js";
//import style from "../../../css/account_widget.css";

export default class ChatListWidget extends Component {

  constructor(chats:object[] = []) {
    let data:IComponentChild<IComponent>[] = new Array(chats.length);
    for (let i = 0; i<chats.length; i++){
      data[i]= ({
        componentClass: ChatItem,
        componentCtx: chats[i],
        rootElement:".widget-chat-list__items"
      });

  }
  super("aside", itemTemplate, {class:"widget-chat-list__list"}, undefined, undefined, data);
}
}
