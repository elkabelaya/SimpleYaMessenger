import { IHTTPTransportCtx } from "../iutils/ihttp_transport";
import { IRequestCTX, METHOD } from "../iutils/ihttp_request";
import { httpRequest } from "./http_request";

export default class HTTPTransport {
	private _url: string
	constructor (url: string){
		this._url = url;

	}
	 get (path: string, options?: IHTTPTransportCtx) {
      return httpRequest( this._url + path + queryStringify(options?.data), prepareRequestCTX( METHOD.GET, false, options), options?.timeout);
		}

   put (path: string, options?: IHTTPTransportCtx) {
		 return httpRequest(this._url + path , prepareRequestCTX( METHOD.PUT, true, options), options?.timeout);
		}

   post (path: string, options?: IHTTPTransportCtx) {
		 return httpRequest(this._url  + path, prepareRequestCTX( METHOD.POST, true, options), options?.timeout);
		};

    delete (path: string, options?: IHTTPTransportCtx) {
	   return httpRequest(this._url  + path, prepareRequestCTX( METHOD.DELETE, false, options), options?.timeout);
		}


}

function prepareRequestCTX( method: METHOD, useBody:Boolean, options: IHTTPTransportCtx = {}):IRequestCTX{
	return {
		method: method,
		headers: options?.headers,
		data: useBody ? options?.data : undefined

	}
}

function queryStringify(data?: any): string {
  let result:string = "";
  if (data){

    result = "?" + Object.keys(data).reduce((acc:string,key:string)=>{ return acc + key + "=" + data[key] + "&";},result).slice(0,-1);

  }

  return result;
}
