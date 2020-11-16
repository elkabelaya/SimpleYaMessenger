
import {template as itemTemplate} from "./account_widget.tmpl";
import FormWidget from "../form_widget/form_widget";
import {initData} from "./account_widget.init";
//import style from "../../../css/account_widget.css";

export default class AccountWidget extends FormWidget {

  constructor() {
    super({}, {}, initData);
  }
  get tagName(){
    return "div";
  }
  get template(){
    return itemTemplate;
  }


}
