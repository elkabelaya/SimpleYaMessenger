import Component from '../component/component';
import {template as inputTemplate} from './input.tmpl';
import {IInputCtx} from '../../components/icomponents/iinput';
import './input.less';

export default class Input extends Component {
	constructor(props: IInputCtx, attr: unknown) {
		super(Object.assign({class: 'input__input-group'}, attr), props);
	}

	get tagName() {
		return 'div';
	}

	get template() {
		return inputTemplate;
	}

	setProps(props: IInputCtx) {
		super.setProps(props);
	}
}
