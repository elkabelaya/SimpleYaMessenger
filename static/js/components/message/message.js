import Component from "../component/component.js";
import { EMessageType } from "../icomponents/imessage.js";
import { template as itemTemplate } from "./message.tmpl.js";
//import style from "../../../css/button.css";
export default class Message extends Component {
    constructor(props, attr) {
        super(undefined, itemTemplate, { class: getMessageClassByType(props.type) }, props);
    }
    setProps(props) {
        super.setProps(props);
    }
}
function getMessageClassByType(type) {
    switch (type) {
        case EMessageType.date:
            return "widget-chat-chat__item-time";
        case EMessageType.in:
            return "widget-chat-chat__item-message";
        default:
            return "widget-chat-chat__item-response-message";
    }
}
