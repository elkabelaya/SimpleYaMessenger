
import {chatUsersTransportInstance} from 'api/transport_instances';
import {BaseAPI} from 'api/base_api';
import {stringKeyString} from 'utils/custom_types';
export default class ChatUsersAPI extends BaseAPI {
	// TODO отрисовать дизайн - не предусмотрены элементы для этого функционала

	// Add users to chat
	async create(data: stringKeyString): Promise<XMLHttpRequest> {
		return chatUsersTransportInstance.put('/', {data});
	}

	// Delete users from chat
	async request(data: stringKeyString): Promise<XMLHttpRequest> {
		return chatUsersTransportInstance.delete('/', {data});
	}
}
