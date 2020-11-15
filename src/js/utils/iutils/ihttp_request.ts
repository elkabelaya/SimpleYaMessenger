export enum METHOD {
		    GET = 'GET',
        PUT = 'PUT',
        POST ='POST',
        DELETE = 'DELETE'
};

export interface IRequestCTX {
  method: METHOD,
  data?: object,
  headers?: Map<string,string>,

}
