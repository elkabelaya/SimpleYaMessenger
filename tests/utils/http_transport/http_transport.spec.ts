import HTTPTransport  from "../../../src/js/utils/http_transport/http_transport"
import {mockXMLHttpRequest, unMockXMLHttpRequest, xhrMockClass} from "../../_mocks/_xml_http_request"

let requestsSended:xhrMockClass[];

beforeEach(() => {

  requestsSended = mockXMLHttpRequest();
});

afterEach(() => {
  unMockXMLHttpRequest();
});

describe("HTTPTransport", () => {
  it("get", () => {


    let headers:Map<string,string> = new Map();
    headers.set("someHeaderKey","someHeaderValue");
    let request: xhrMockClass;
    HTTPTransport.get("https://someurl.ru", {data:{"a":"s","b":"d"},headers: headers})
    .then(xhr=>{
      expect(xhr.response).toBe("someRespond");
    })



    expect(requestsSended.length).toBe(1);
    request = requestsSended[0];
    expect(request.headers.get("someHeaderKey")).toBe("someHeaderValue");
    expect(request.url).toBe("https://someurl.ru?a=s&b=d");
    expect(request.method).toBe("GET");
    expect(request.body).toBe(undefined);

    request.mockRespond(200,"someRespond");

    expect.assertions(6);
  });

  it("post", () => {


    let headers:Map<string,string> = new Map();
    headers.set("someHeaderKey","someHeaderValue");
    let request: xhrMockClass;
    HTTPTransport.post("https://someurl.ru", {data:{"a":"s","b":"d"},headers: headers})

    request = requestsSended[0];
    expect(request.headers.get("someHeaderKey")).toBe("someHeaderValue");
    expect(request.url).toBe("https://someurl.ru");
    expect(request.method).toBe("POST");
    expect(request.body).toBe(JSON.stringify({"a":"s","b":"d"}));


  });

  it("put", () => {


    let headers:Map<string,string> = new Map();
    headers.set("someHeaderKey","someHeaderValue");
    let request: xhrMockClass;
    HTTPTransport.put("https://someurl.ru", {data:{"a":"s","b":"d"},headers: headers})

    request = requestsSended[0];
    expect(request.headers.get("someHeaderKey")).toBe("someHeaderValue");
    expect(request.url).toBe("https://someurl.ru");
    expect(request.method).toBe("PUT");
    expect(request.body).toBe(JSON.stringify({"a":"s","b":"d"}));


  });

  it("delete", () => {


    let headers:Map<string,string> = new Map();
    headers.set("someHeaderKey","someHeaderValue");
    let request: xhrMockClass;
    HTTPTransport.delete("https://someurl.ru", {data:{"a":"s","b":"d"},headers: headers})

    request = requestsSended[0];
    expect(request.headers.get("someHeaderKey")).toBe("someHeaderValue");
    expect(request.url).toBe("https://someurl.ru");
    expect(request.method).toBe("DELETE");
    expect(request.body).toBe(undefined);


  });



});
