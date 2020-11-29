import {stringKeyObject} from '../custom_types';

export interface IHTTPTransportCtx {

	data?: stringKeyObject;
	headers?: Map<string, string>;
	timeout?: number;

}
