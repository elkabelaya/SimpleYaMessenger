import Component from 'components/component/component';
import {IAvatarCtx} from 'components/icomponents/iavatar';
import {template as itemTemplate} from 'components/avatar/avatar.tmpl';
import 'components/avatar/avatar.less';
import {DEFAULT_AVATAR_PATH} from 'default/default_images';

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
		if (!props.url) {
			props.url = DEFAULT_AVATAR_PATH;
		}

		super.setProps(props);
	}
}
