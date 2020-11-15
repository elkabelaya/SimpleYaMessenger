export interface IXHRMockObj {
    url:string,
    method:string,
    headers:[][],
    readyState: number,
    status:number,
    response:string,
    open(method:string, url:string): void,
    send(): void,
    setRequestHeader(key:string,value:string):void,
    onreadystatechange():void,
    mockRespond(status:number, response:string):void,


  }
