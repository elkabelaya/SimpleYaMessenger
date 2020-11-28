import Component from '../component/component';
import {template as buttonItemTemplate} from './button.tmpl';
import {IButtonCtx} from '../../components/icomponents/ibutton';
import './button.less';

export default class Button extends Component {
	constructor(props: IButtonCtx, attr: Record<string, unknown>) {
		super(attr, props);
	}

	get tagName() {
		return 'div';
	}

	get template() {
		return buttonItemTemplate;
	}

	setProps(props: IButtonCtx) {
		super.setProps(props);
	}
}
