import Component from '../component/component';
import {IAvatarCtx} from '../icomponents/iavatar';
import {template as itemTemplate} from './avatar.tmpl';
import './avatar.less';

export default class Avatar extends Component {
	constructor(props: IAvatarCtx, attr: unknown = {}) {
		super(attr, props);
	}

	get tagName() {
		return 'div';
	}

	get template() {
		return itemTemplate;
	}

	setProps(props: IAvatarCtx) {
		super.setProps(props);
	}
}
