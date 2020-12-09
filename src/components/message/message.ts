import Component from 'components/component/component';
import {EMessageType, IMessageCtx} from 'components/icomponents/imessage';
import {template as itemTemplate} from 'components/message/message.tmpl';
import 'components/message/message.less';

export default class Message extends Component {
	constructor(props: IMessageCtx) {
		super({class: getMessageClassByType(props.type)}, props);
	}

	get tagName() {
		return 'div';
	}

	get template() {
		return itemTemplate;
	}

	setProps(props: IMessageCtx) {
		super.setProps(props);
	}
}

function getMessageClassByType(type: EMessageType) {
	switch (type) {
		case EMessageType.date:
			return 'widget-chat-chat__item-time';
		case EMessageType.in:
			return 'widget-chat-chat__item-message';
		default:
			return 'widget-chat-chat__item-response-message';
	}
}
