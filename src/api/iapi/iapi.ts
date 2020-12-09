import {stringKeyString} from 'utils/custom_types';
export interface IApi {
	create(_data?: stringKeyString): Promise<XMLHttpRequest>;
	request(_data?: stringKeyString): Promise<XMLHttpRequest>;
	update(_data?: stringKeyString): Promise<XMLHttpRequest>;
	delete(): Promise<XMLHttpRequest>;
}
