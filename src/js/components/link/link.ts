import Component from '../component/component';
import {template as inputTemplate} from './link.tmpl';
import {ILinkCtx} from '../../components/icomponents/ilink';
import './ilink.less';

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
