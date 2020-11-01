import Component from "../component/component.js";
import { template as chatItemTemplate } from "./chat_item.tmpl.js";
//import style from "../../../css/chat_item.css";
export default class ChatItem extends Component {
    constructor(props) {
        super("li", chatItemTemplate, { class: "chat_item" }, props);
    }
    setProps(props) {
        super.setProps(props);
    }
}
