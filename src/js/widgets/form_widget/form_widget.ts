
import { IComponent } from "../../components/icomponents/icomponent.js";
import Component from "../../components/component/component.js";
import { IComponentChild } from "../../components/icomponents/icomponent_child.js";
import FormValidator from "../../utils/form_handler.js";
import Templator from "../../utils/templator/templator.js";
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
