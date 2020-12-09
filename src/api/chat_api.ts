
import {chatTransportInstance} from 'api/transport_instances';
import {BaseAPI} from 'api/base_api';
import {stringKeyString} from 'utils/custom_types';

export default class ChatAPI extends BaseAPI {
	async create(_data?: stringKeyString): Promise<XMLHttpRequest> {
		return chatTransportInstance.post('/', {data: _data});
	}

	// Список чатов пользователя
	async request(): Promise<XMLHttpRequest> {
		return chatTransportInstance.get('/');
	}
}
