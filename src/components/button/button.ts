import Component from 'components/component/component';
import {template as buttonItemTemplate} from 'components/button/button.tmpl';
import {IButtonCtx} from 'components/icomponents/ibutton';
import 'components/button/button.less';

export default class Button extends Component {
	constructor(props: IButtonCtx, attr: unknown) {
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
