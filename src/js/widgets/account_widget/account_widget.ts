import { accountService } from "../../services/service_instances";
import {template as itemTemplate} from "./account_widget.tmpl";
import FormWidget from "../form_widget/form_widget";
import {initData} from "./account_widget.init";
import { userStoreInstance } from "../../stores/store_instances";
//import style from "../../../css/account_widget.css";

export default class AccountWidget extends FormWidget {

  constructor() {
    super({}, {}, initData);
    userStoreInstance.on("change", ()=> {
      console.log("change", userStoreInstance.get());
      this.setProps( userStoreInstance.get());
    })

    userStoreInstance.on("change", ()=> {
      let  fields:object[] = userStoreInstance.get("");
      let data:IComponentChild<IComponent>[] = new Array(fields.length);
      for (let i = 0; i<chats.length; i++){
        data[i]= ({
          componentCtx: fields[i],
        });

      }

      this.setChildren(data);
    })


  }

  render(){
    super.render();
    let service = accountService;
    service.start(this.element.querySelector("form"));
  }

  get tagName(){
    return "div";
  }
  get template(){
    return itemTemplate;
  }


}
