import Component from 'components/component/component';
import {IErrorCtx} from 'components/icomponents/ierror';
import {template as itemTemplate} from './error.tmpl';
import 'components/error/error.less';
export default class Error extends Component {
	constructor(props: IErrorCtx, attr: unknown) {
		super(attr, props);
	}

	get tagName() {
		return 'div';
	}

	get template() {
		return itemTemplate;
	}

	setProps(props: IErrorCtx) {
		super.setProps(props);
	}
}
