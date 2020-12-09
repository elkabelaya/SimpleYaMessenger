import {userTransportInstance} from 'api/transport_instances';
import {BaseAPI} from 'api/base_api';
import {stringKeyString} from 'utils/custom_types';

export default class UserAPI extends BaseAPI {
	async update(data?: stringKeyString): Promise<XMLHttpRequest> {
		return userTransportInstance.put('/profile', {data});
	}

	async updateAvatar(data: FormData): Promise<XMLHttpRequest> {
		return userTransportInstance.put('/profile/avatar', {data});
	}

	async updatePassword(data: stringKeyString): Promise<XMLHttpRequest> {
		return userTransportInstance.put('/password', {data});
	}
}
