
import ChatItem from  "../../components/chat_item/chat_item.js";
import {template as itemTemplate} from "./chat_list_widget.tmpl.js"
import { IComponent } from "../../components/icomponents/icomponent.js";
import { IComponentChild } from "../../components/icomponents/icomponent_child.js";
import FormWidget from "../form_widget/form_widget.js";
//import style from "../../../css/account_widget.css";

export default class ChatListWidget extends FormWidget {

  constructor(chats:object[] = []) {
    let data:IComponentChild<IComponent>[] = new Array(chats.length);
    for (let i = 0; i<chats.length; i++){
      data[i]= ({
        componentClass: ChatItem,
        componentCtx: chats[i],
        rootElement:".widget-chat-list__items",
        componentAttrs:{}
      });

  }
  super("aside", itemTemplate, {class:"widget-chat-list__list"}, undefined, undefined, data);
}
}
