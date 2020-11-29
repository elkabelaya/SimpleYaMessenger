import {stringKeyObject} from '../../utils/custom_types';
export interface IApi {
	create(_data?: stringKeyObject): Promise<XMLHttpRequest>;
	request(_data?: stringKeyObject): Promise<XMLHttpRequest>;
	update(_data?: stringKeyObject): Promise<XMLHttpRequest>;
	delete(): Promise<XMLHttpRequest>;
}
