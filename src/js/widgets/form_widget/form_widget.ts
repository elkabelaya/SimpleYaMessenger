
import { IComponent } from "../../components/icomponents/icomponent";
import Component from "../../components/component/component";
import { IComponentChild } from "../../components/icomponents/icomponent_child";
//import FormValidator from "../../utils/form_handler";
//import style from "../../../css/account_widget.css";

export default class FormWidget extends Component {
//  _formValidator:FormValidator;
  constructor( attributes?: object, props?: object, children?:IComponentChild<IComponent>[]) {

    super( attributes, props, children);


  }
  render(){
    super.render();
    //this._formValidator = new FormValidator(this.element.querySelector("form"));
  }

}
