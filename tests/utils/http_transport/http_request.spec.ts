import {httpRequest}  from "../../../src/js/utils/http_transport/http_request"
import { METHOD } from "../../../src/js/utils/iutils/ihttp_request";
import {mockXMLHttpRequest, unMockXMLHttpRequest, xhrMockClass} from "../../_mocks/_xml_http_request"

let requestsSended:xhrMockClass[];

beforeEach(() => {
  requestsSended = mockXMLHttpRequest();
});

afterEach(() => {
  unMockXMLHttpRequest();
});

describe("request", () => {
  it("get successfully", () => {


    let headers:Map<string,string> = new Map();
    headers.set("someHeaderKey","someHeaderValue");
    let request: xhrMockClass;

    httpRequest ("https://someurl.ru?a=b", {method:METHOD.GET, headers: headers})
    .then(xhr=>{
      expect(xhr.response).toBe("someRespond");
    })


    expect(requestsSended.length).toBe(1);
    request = requestsSended[0];
    expect(request.headers.get("someHeaderKey")).toBe("someHeaderValue");
    expect(request.url).toBe("https://someurl.ru?a=b");
    expect(request.method).toBe(METHOD.GET);

    request.mockRespond(200,"someRespond");

    expect.assertions(5);
  });

  it("post error", () => {


    let headers = new Map();//["someHeaderKey","someHeaderValue"]);
    let request: xhrMockClass;

    httpRequest ("https://someurl.ru?a=b", {method:METHOD.POST, headers: headers})
    .catch(xhr=>{
      expect(xhr.response).toBe("someRespond");
    })


    expect(requestsSended.length).toBe(1);
    request = requestsSended[0];
    expect(request.url).toBe("https://someurl.ru?a=b");
    expect(request.method).toBe(METHOD.POST);

    request.mockRespond(500,"someRespond");

    expect.assertions(4);
  });

  it("abort", () => {
    let request: xhrMockClass;

    httpRequest ("https://someurl.ru?a=b", {method:METHOD.GET})
    .catch(xhr=>{
      expect(xhr.response).toBe(undefined);
    })
    request = requestsSended[0];
    request.mockAbort();

    expect.assertions(1);
  });



});
