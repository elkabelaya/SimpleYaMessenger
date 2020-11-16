
import {template as itemTemplate} from "./start_widget.tmpl";
import FormWidget from "../form_widget/form_widget";
import { userService } from "../../services/service_instances";

//import style from "../../../css/account_widget.css";

export default class StartWidget extends FormWidget {

  constructor() {
    super({}, {},);
    let service = userService;
    service.start();
  }
  get tagName(){
    return "div";
  }
  get template(){
    return itemTemplate;
  }


}
