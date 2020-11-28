import {IHTTPTransportCtx} from '../iutils/ihttp_transport';
import {IRequestCTX, METHOD} from '../iutils/ihttp_request';
import {httpRequest} from './http_request';

const CONTENT_TYPE_HEADER: string[] = ['Content-type', 'application/json; charset=utf-8'];

export default class HTTPTransport {
	private readonly _url: string;
	constructor(url: string) {
		this._url = url;
	}

	 get(path: string, options?: IHTTPTransportCtx) {
		return httpRequest(this._url + path + queryStringify(options?.data), prepareRequestCTX(METHOD.GET, false, options), options?.timeout);
	}

	put(path: string, options?: IHTTPTransportCtx) {
		 return httpRequest(this._url + path, prepareRequestCTX(METHOD.PUT, true, options), options?.timeout);
	}

	post(path: string, options?: IHTTPTransportCtx) {
		 return httpRequest(this._url + path, prepareRequestCTX(METHOD.POST, true, options), options?.timeout);
	}

	delete(path: string, options?: IHTTPTransportCtx) {
	   return httpRequest(this._url + path, prepareRequestCTX(METHOD.DELETE, false, options), options?.timeout);
	}
}

function prepareRequestCTX(method: METHOD, useBody: boolean, options: IHTTPTransportCtx = {}): IRequestCTX {
	let headers = options?.headers || new Map();
	if (!headers.has(CONTENT_TYPE_HEADER[0])) {
		headers.set(CONTENT_TYPE_HEADER[0], CONTENT_TYPE_HEADER[1]);
	}

	return {
		method: method,
		headers: headers,
		data: useBody ? options?.data : undefined

	};
}

function queryStringify(data?: any): string {
	let result = '';
	if (data) {
		result = '?' + Object.keys(data).reduce((acc: string, key: string) => {
			return acc + key + '=' + data[key] + '&';
		}, result).slice(0, -1);
	}

	return result;
}
