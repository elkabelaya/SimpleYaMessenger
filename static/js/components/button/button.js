import Component from "../component/component.js";
import { template as buttonItemTemplate } from "./button.tmpl.js";
//import style from "../../../css/button.css";
export default class Button extends Component {
    constructor(props, attr) {
        super(undefined, buttonItemTemplate, attr, props);
    }
    setProps(props) {
        super.setProps(props);
    }
}
