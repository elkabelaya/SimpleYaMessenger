import Component from "../component/component";
import {template as chatItemTemplate} from "./chat_item.tmpl";
import {IChatItemCtx} from "../../components/icomponents/ichat_item"
import "./chat_item.less";
export default class ChatItem extends Component {

  constructor(props: IChatItemCtx) {
    super({class:"chat_item"}, props);
  }

  get tagName(){
    return "li";
  }
  get template(){
    return chatItemTemplate;
  }

  setProps(props:IChatItemCtx){
    super.setProps(props);
  }

}
