import Component from "../component/component";
import {template as chatItemTemplate} from "./chat_item.tmpl";
import {IChatItemCtx} from "../../components/icomponents/ichat_item"
//import style from "../../../css/chat_item.css";

export default class ChatItem extends Component {

  constructor(props: IChatItemCtx) {
    super("li", chatItemTemplate, {class:"chat_item"}, props);
  }

  setProps(props:IChatItemCtx){
    super.setProps(props);
  }

}
