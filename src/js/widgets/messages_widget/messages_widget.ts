import {template as itemTemplate} from "./messages_widget.tmpl.js"
import { IComponent } from "../../components/icomponents/icomponent.js";
import { IComponentChild } from "../../components/icomponents/icomponent_child.js";
import Message from "../../components/message/message.js";
import FormWidget from "../form_widget/form_widget.js";
//import style from "../../../css/account_widget.css";

export default class MessagesWidget extends FormWidget {

  constructor(chats:object[] = []) {
    let data:IComponentChild<IComponent>[] = new Array(chats.length);
    for (let i = 0; i<chats.length; i++){
      data[i]= ({
        componentClass: Message,
        componentCtx: chats[i],
        rootElement:".widget-chat-list__items",
        componentAttrs:{}
      });

    }
    super("div", itemTemplate, {class:"widget-chat-chat__content"}, undefined, undefined, data);
  }
}
