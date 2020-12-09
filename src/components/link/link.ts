import Component from 'components/component/component';
import {template as inputTemplate} from 'components/link/link.tmpl';
import {ILinkCtx} from 'components/icomponents/ilink';
import 'components/link/ilink.less';

export default class Link extends Component {
	constructor(props: ILinkCtx, attr: unknown) {
		super(attr, props);
	}

	get tagName() {
		return 'div';
	}

	get template() {
		return inputTemplate;
	}

	setProps(props: ILinkCtx) {
		super.setProps(props);
	}
}
