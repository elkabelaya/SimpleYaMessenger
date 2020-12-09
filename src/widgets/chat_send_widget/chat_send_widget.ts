import ChatItem from 'components/chat_item/chat_item';
import {template as itemTemplate} from 'widgets/chat_send_widget/chat_send_widget.tmpl';
import {IComponent} from 'components/icomponents/icomponent';
import {IComponentChild} from 'components/icomponents/icomponent_child';
import Component from 'components/component/component';
import {chatsService} from 'services/service_instances';
import {chatsStoreInstance} from 'stores/store_instances';
import {IStore} from 'stores/istore';
import 'widgets/chat_send_widget/chat_send_widget.less';
import {STORE_CHATS_CURRENT} from 'stores/store_fields';

export default class ChatSendWidget extends Component {
	get template() {
		return itemTemplate;
	}
}
