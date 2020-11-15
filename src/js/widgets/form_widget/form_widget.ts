
import { IComponent } from "../../components/icomponents/icomponent";
import Component from "../../components/component/component";
import { IComponentChild } from "../../components/icomponents/icomponent_child";
import FormValidator from "../../utils/form_handler";
import Templator from "../../utils/templator/templator";
//import style from "../../../css/account_widget.css";

export default class FormWidget extends Component {
  _formValidator:FormValidator;
  constructor(tagName?: string, template?: string,
              attributes?: object, props?: object,
              templator?: Templator, children?:IComponentChild<IComponent>[]) {

    super(tagName, template, attributes, props, templator, children);


  }
  render(){
    super.render();
    this._formValidator = new FormValidator(this.element.querySelector("form"));
  }

}
