import { IRequestCTX } from "../iutils/ihttp_request";

export function httpRequest (url:string, options:IRequestCTX, timeout = 5000):Promise<XMLHttpRequest> {
  return new Promise ((resolve,reject) => {

          const xhr:any = new window.XMLHttpRequest();



            xhr.onreadystatechange = (_e:ProgressEvent) => {

                if (xhr.readyState === 4) {
                  if (xhr.status>=200 && xhr.status<400){
                    resolve(xhr);
                  } else {
                    reject(xhr);
                  }
                }
            }

            if (options.headers){
							options.headers.forEach((value, header) => {xhr.setRequestHeader(header, value)});
            }

            xhr.ontimeout = (_e:ProgressEvent)=>reject(xhr);
            xhr.onabort = (_e:ProgressEvent)=>reject(xhr);
            xhr.timeout = timeout;
            xhr.withCredentials = true;
            xhr.open(options.method, url);
            xhr.send(JSON.stringify(options.data));

        })	;
}
