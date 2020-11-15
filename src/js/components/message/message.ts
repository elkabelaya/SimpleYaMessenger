import Component from "../component/component";
import { EMessageType, IMessageCtx } from "../icomponents/imessage";
import {template as itemTemplate} from "./message.tmpl";
//import style from "../../../css/button.css";

export default class Message extends Component {

  constructor(props: IMessageCtx) {
    super("div", itemTemplate, {class: getMessageClassByType(props.type)} , props);
  }

  setProps(props:IMessageCtx){
    super.setProps(props);
  }

}

function getMessageClassByType(type:EMessageType){
  switch(type){
    case EMessageType.date:
      return "widget-chat-chat__item-time";
    case EMessageType.in:
      return "widget-chat-chat__item-message";
    default:
       return "widget-chat-chat__item-response-message";
     }
  }
