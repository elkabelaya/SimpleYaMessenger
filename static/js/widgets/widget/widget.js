import Component from "../../components/component/component.js";
//import style from "../../../css/account_widget.css";
export default class Widget extends Component {
    constructor() {
        super(...arguments);
        this._children = null;
    }
    render() {
        super.render();
        let element = super.element;
        let documentFragment = document.createDocumentFragment();
        for (let child of this._children) {
            element.querySelector(child.rootElement).appendChild(new child.componentClass(child.componentCtx).element);
        }
        return element;
    }
}
