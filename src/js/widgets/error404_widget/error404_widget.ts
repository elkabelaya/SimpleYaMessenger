
import {template as itemTemplate} from "./error404_widget.tmpl";
import {initData} from "./error404_widget.init";
import Component from "../../components/component/component";
//import style from "../../../css/account_widget.css";

export default class ErrorWidget extends Component {

  constructor() {
    super({class:".error_widget__error"}, {}, initData);
  }
  get tagName(){
    return "div";
  }
  get template(){
    return itemTemplate;
  }


}
