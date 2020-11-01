import Component from "../component/component.js";
import { template as itemTemplate } from "./error.tmpl.js";
//import style from "../../../css/button.css";
export default class Button extends Component {
    constructor(props, attr) {
        super(undefined, itemTemplate, attr, props);
    }
    setProps(props) {
        super.setProps(props);
    }
}
