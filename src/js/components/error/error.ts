import Component from "../component/component";
import { IErrorCtx } from "../icomponents/ierror";
import {template as itemTemplate} from "./error.tmpl";
//import style from "../../../css/button.css";

export default class Error extends Component {

  constructor(props: IErrorCtx, attr:object) {
    super(attr, props);
  }
  get tagName(){
    return "div";
  }
  get template(){
    return itemTemplate;
  }
  setProps(props:IErrorCtx){
    super.setProps(props);
  }

}
