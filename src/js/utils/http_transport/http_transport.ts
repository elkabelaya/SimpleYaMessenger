import {IHTTPTransportCtx} from '../iutils/ihttp_transport';
import {IRequestCTX, METHOD} from '../iutils/ihttp_request';
import {httpRequest} from './http_request';
import {stringKeyObject} from '../custom_types';

const CONTENT_TYPE_HEADER: string[] = ['Content-type', 'application/json; charset=utf-8'];

export default class HTTPTransport {
	private readonly _url: string;
	constructor(url: string) {
		this._url = url;
	}

	async get(path: string, options?: IHTTPTransportCtx) {
		return httpRequest(this._url + path + queryStringify(options?.data), prepareRequestCTX(METHOD.GET, false, options), options?.timeout);
	}

	async put(path: string, options?: IHTTPTransportCtx) {
		return httpRequest(this._url + path, prepareRequestCTX(METHOD.PUT, true, options), options?.timeout);
	}

	async post(path: string, options?: IHTTPTransportCtx) {
		return httpRequest(this._url + path, prepareRequestCTX(METHOD.POST, true, options), options?.timeout);
	}

	async delete(path: string, options?: IHTTPTransportCtx) {
		return httpRequest(this._url + path, prepareRequestCTX(METHOD.DELETE, false, options), options?.timeout);
	}
}

function prepareRequestCTX(method: METHOD, useBody: boolean, options: IHTTPTransportCtx = {}): IRequestCTX {
	const headers = options?.headers ?? new Map();
	if (!headers.has(CONTENT_TYPE_HEADER[0])) {
		headers.set(CONTENT_TYPE_HEADER[0], CONTENT_TYPE_HEADER[1]);
	}

	return {
		method: method,
		headers: headers,
		data: useBody ? options?.data : undefined

	};
}

function queryStringify(data?: stringKeyObject): string {
	let result = '';
	if (data) {
		/* eslint-disable-next-line @typescript-eslint/ban-types */
		result = '?' + Object.keys(data as object).reduce((acc: string, key: string) => {
			return `${acc}${key}=${data[key] as unknown as string}&`;
		}, result).slice(0, -1);
	}

	return result;
}
