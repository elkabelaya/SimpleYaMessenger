

let originalXMLHttpRequest:any;
let requestsSended:xhrMockClass[] = [];

export class xhrMockClass {
  url:string
  method:string
  headers:Map<string,string>
  readyState: number
  status:number
  response:string
  body:string

  open(method:string, url:string): void {
    this.method = method;
    this.url = url;

  }
  send( body:string ): void{
    this.body = body;
    requestsSended.push(this);

  }
  setRequestHeader(key:string,value:string):void{
    if(!this.headers){
      this.headers = new Map();
    }
    this.headers.set(key,value);
  }
  onreadystatechange():void{}
  onabort():void{}
  mockRespond(status:number, response:string):void{
    this.readyState = 4;
    this.status = status;
    this.response = response;
    this.onreadystatechange();
  }
  mockAbort():void{
    this.onabort();
  }
}

export function mockXMLHttpRequest():xhrMockClass[] {

  if (!originalXMLHttpRequest){
    originalXMLHttpRequest = window.XMLHttpRequest;
  }

  // @ts-ignore
  window.XMLHttpRequest = jest.fn().mockImplementation(()=> {return new xhrMockClass()});

  return requestsSended;

}

export function unMockXMLHttpRequest() {

  if (!originalXMLHttpRequest){
    throw Error("request never was mocked");
  }
  requestsSended = [];
  window.XMLHttpRequest = originalXMLHttpRequest;

}
