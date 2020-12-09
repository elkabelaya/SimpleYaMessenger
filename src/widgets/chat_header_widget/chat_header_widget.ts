
import ChatItem from 'components/chat_item/chat_item';
import {template as itemTemplate} from 'widgets/chat_header_widget/chat_header_widget.tmpl';
import {IComponent} from 'components/icomponents/icomponent';
import {IComponentChild} from 'components/icomponents/icomponent_child';
import Component from 'components/component/component';
import {chatsService} from 'services/service_instances';
import {chatsStoreInstance} from 'stores/store_instances';
import {IStore} from 'stores/istore';
import 'widgets/chat_header_widget/chat_header_widget.less';
import {STORE_CHATS_CURRENT} from 'stores/store_fields';

export default class ChatHeaderWidget extends Component {
	constructor() {
		super({class: 'widget-chat-chat__header'});

		chatsStoreInstance.on('change', type => {
			if (type === STORE_CHATS_CURRENT) {
				_setProps.call(this, chatsStoreInstance);
			}
		});
		_setProps.call(this, chatsStoreInstance);
	}

	get template() {
		return itemTemplate;
	}
}

function _setProps(store: IStore) {
	const current: unknown[] = store.get(STORE_CHATS_CURRENT) as unknown[];
	this.setProps(current);
}
