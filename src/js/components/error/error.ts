import Component from "../component/component.js";
import { IErrorCtx } from "../icomponents/ierror.js";
import {template as itemTemplate} from "./error.tmpl.js";
//import style from "../../../css/button.css";

export default class Button extends Component {

  constructor(props: IErrorCtx, attr:object) {
    super(undefined, itemTemplate, attr, props);
  }

  setProps(props:IErrorCtx){
    super.setProps(props);
  }

}
