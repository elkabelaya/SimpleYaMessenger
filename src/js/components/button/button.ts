import Component from "../component/component";
import {template as buttonItemTemplate} from "./button.tmpl";
import {IButtonCtx} from "../../components/icomponents/ibutton";
//import style from "../../../css/button.css";

export default class Button extends Component {

  constructor(props: IButtonCtx, attr:object) {
    super("div", buttonItemTemplate, attr, props);
  }

  setProps(props:IButtonCtx){
    super.setProps(props);
  }

}
