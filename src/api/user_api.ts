import {userTransportInstance} from './transport_instances';
import {BaseAPI} from './base_api';
import {stringKeyString} from '../utils/custom_types';

export default class UserAPI extends BaseAPI {
	async update(data?: stringKeyString): Promise<XMLHttpRequest> {
		return userTransportInstance.put('/profile', {data: data});
	}

	async updateAvatar(data: FormData): Promise<XMLHttpRequest> {
		return userTransportInstance.put('/profile/avatar', {data: data});
	}

	async updatePassword(data: stringKeyString): Promise<XMLHttpRequest> {
		return userTransportInstance.put('/password', {data: data});
	}
}