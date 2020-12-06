import {stringKeyString} from '../custom_types';

export interface IHTTPTransportCtx {

	data?: stringKeyString|FormData;
	headers?: stringKeyString;
	timeout?: number;

}
