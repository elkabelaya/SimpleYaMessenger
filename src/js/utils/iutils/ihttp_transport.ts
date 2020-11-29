import {stringKeyString} from '../custom_types';

export interface IHTTPTransportCtx {

	data?: stringKeyString;
	headers?: Map<string, string>;
	timeout?: number;

}
