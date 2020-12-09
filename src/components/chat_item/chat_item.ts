import Component from 'components/component/component';
import {template as chatItemTemplate} from './chat_item.tmpl';
import {IChatItemCtx} from 'components/icomponents/ichat_item';
import {DEFAULT_AVATAR_PATH} from 'default/default_images';
import './chat_item.less';
export default class ChatItem extends Component {
	constructor(props: IChatItemCtx) {
		super({class: 'chat_item', id: props.id}, props);
	}

	get tagName() {
		return 'li';
	}

	get template() {
		return chatItemTemplate;
	}

	setProps(props: IChatItemCtx) {
		if (!props.avatar) {
			props.avatar = DEFAULT_AVATAR_PATH;
		}

		super.setProps(props);
	}
}
