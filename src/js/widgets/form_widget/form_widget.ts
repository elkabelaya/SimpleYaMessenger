
import {IComponent} from '../../components/icomponents/icomponent';
import Component from '../../components/component/component';
import {IComponentChild} from '../../components/icomponents/icomponent_child';
// Import FormValidator from "../../utils/form_handler";
// import style from "../../../css/account_widget.css";

export default class FormWidget extends Component {
//  _formValidator:FormValidator;
	constructor(attributes?: Record<string, unknown>, props?: Record<string, unknown>, children?: Array<IComponentChild<IComponent>>) {
		super(attributes, props, children);
	}

	render() {
		super.render();
		// This._formValidator = new FormValidator(this.element.querySelector("form"));
	}
}
