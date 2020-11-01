import Component from "../component/component.js";
import {template as inputTemplate} from "./input.tmpl.js";
import {IInputCtx} from "../../components/icomponents/iinput.js"
//import style from "../../../css/input.css";

export default class Input extends Component {

  constructor(props: IInputCtx, attr:object) {

    super("div", inputTemplate, Object.assign({class:"input__input-group"}, attr), props);
  }

  setProps(props:IInputCtx){
    super.setProps(props);
  }

}
