import Component from "../component/component.js";
import { template as widgetHeaderTemplate } from "./widget_header.tmpl.js";
//import style from "../../../css/widget_header.css";
export default class Button extends Component {
    constructor(props) {
        super("header", widgetHeaderTemplate, { class: "login-widget__header" }, props);
    }
    setProps(props) {
        super.setProps(props);
    }
}
