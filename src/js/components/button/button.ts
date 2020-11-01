import Component from "../component/component.js";
import {template as buttonItemTemplate} from "./button.tmpl.js";
import {IButtonCtx} from "../../components/icomponents/ibutton.js";
//import style from "../../../css/button.css";

export default class Button extends Component {

  constructor(props: IButtonCtx, attr:object) {
    super("div", buttonItemTemplate, attr, props);
  }

  setProps(props:IButtonCtx){
    super.setProps(props);
  }

}
