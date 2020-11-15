import Component from "../component/component";
import {template as inputTemplate} from "./input.tmpl";
import {IInputCtx} from "../../components/icomponents/iinput"
//import style from "../../../css/input.css";

export default class Input extends Component {

  constructor(props: IInputCtx, attr:object) {

    super("div", inputTemplate, Object.assign({class:"input__input-group"}, attr), props);
  }

  setProps(props:IInputCtx){
    super.setProps(props);
  }

}
