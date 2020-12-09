import ChatItem from 'components/chat_item/chat_item';
import {template as itemTemplate} from 'widgets/chat_list_widget/chat_list_widget.tmpl';
import {IComponent} from 'components/icomponents/icomponent';
import {IComponentChild} from 'components/icomponents/icomponent_child';
import FormWidget from 'widgets/form_widget/form_widget';
import {chatsService} from 'services/service_instances';
import {chatsStoreInstance} from 'stores/store_instances';
import {IStore} from 'stores/istore';
import 'widgets/chat_list_widget/chat_list_widget.less';
import {STORE_CHATS_LIST} from 'stores/store_fields';

export default class ChatListWidget extends FormWidget {
	constructor() {
		super({class: 'widget-chat-list__list'});

		chatsStoreInstance.on('change', type => {
			if (type === STORE_CHATS_LIST) {
				_setChildren.call(this, chatsStoreInstance);
			}
		});
		_setChildren.call(this, chatsStoreInstance);
	}

	render() {
		super.render();
		const service = chatsService;
		service.start(this.element.getElementsByTagName('li'));
	}

	get tagName() {
		return 'aside';
	}

	get template() {
		return itemTemplate;
	}
}

function _setChildren(store: IStore) {
	const chats: unknown[] = store.get(STORE_CHATS_LIST) as unknown[];
	if (!chats) {
		return;
	}

	const data: Array<IComponentChild<IComponent>> = new Array(chats.length);

	for (let i = 0; i < chats.length; i++) {
		data[i] = ({
			componentClass: ChatItem,
			componentCtx: chats[i],
			rootElement: '.widget-chat-list__items',
			componentAttrs: {}
		});
	}

	this.setChildren(data);
}
