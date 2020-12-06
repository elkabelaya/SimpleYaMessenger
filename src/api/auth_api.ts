import {stringKeyString} from '../utils/custom_types';
import {authTransportInstance} from './transport_instances';
import {BaseAPI} from './base_api';
export default class AuthAPI extends BaseAPI {
	async create(data: stringKeyString): Promise<XMLHttpRequest> {
		return authTransportInstance.post('/signup', {data: data});
	}

	async request(data: stringKeyString): Promise<XMLHttpRequest> {
		return authTransportInstance.post('/signin', {data: data});
	}

	async update(): Promise<XMLHttpRequest> {
		return authTransportInstance.get('/user');
	}

	async delete(): Promise<XMLHttpRequest> {
		return authTransportInstance.post('/logout');
	}
}
