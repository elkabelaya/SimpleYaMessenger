import {
  isObjectKey,
  getValueFromObject,
  fillTemplates,
  getParamForTemplateKey,
  sanitise,
  parseHtmlToObject,
  compileTemplate
} from "../../../src/js/utils/templator/templator_helpers"

describe("isObjectKey", () => {
  it("detects object keys", () => {
    expect(isObjectKey("f.h.j"));
  });
  it("detects non-object keys", () => {
    expect(!isObjectKey("f"));
  });
  it("detects non-object keys", () => {
    expect(!isObjectKey("f,g"));
  });
  it("detects non-object keys", () => {
    expect(!isObjectKey("f:g"));
  });
});




describe("getValueFromObject", () => {
  it("gets key by path", () => {
    expect(getValueFromObject("f.h.j", {f:{g:{h:5}}},0) === 5);
  });
  it("returns default", () => {
    expect(getValueFromObject("f.h.j", {f:{g:5}},0) === 0);
  });
  it("returns default", () => {
    expect(getValueFromObject("", {f:{g:5}},0) === 0);
  });
});


describe("fillTemplates", () => {
  it("fills template", () => {
    expect(fillTemplates("some string: {{key}}", {"key":"value"}) === "some string: value");
  });

  it("fills few templates", () => {
    expect(fillTemplates("some string: {{key}}, other string: {{key}}", {"key":"value"}) === "some string: value, other string: value");
  });

  it("fills  templates with spaces", () => {
    expect(fillTemplates("{{ key}},{{key   }},{{   key   }}", {"key":"value"}) === "value,value,value");
  });
  it("fills  unknown", () => {
    expect(fillTemplates("key:{{unknown_key}}", {"key":"value"}) === "key:");
  });

});


describe("getParamForTemplateKey", () => {
  it("get string param", () => {
    expect(getParamForTemplateKey("key", {"key":"value"}) === "value");
  });
  it("get number param", () => {
    expect(getParamForTemplateKey("key", {"key":2}) === "2");
  });

  it("get undefined param", () => {
    expect(getParamForTemplateKey("key_", {"key":2}) === "");
  });

  it("get object param", () => {
    try{
      getParamForTemplateKey("key", {"key":{"a":2}});
      expect(false);
    } catch(e){
      expect(true);
    }
  });

  it("get function param", () => {
    try{
      getParamForTemplateKey("key", {"key":()=>{}});
      expect(false);
    } catch(e){
      expect(true);
    }
  });


});


describe("sanitise", () => {
  it("escapes simbols", () => {
    expect(sanitise("<a>&''</a>") === "&lt;a&gt;&amp;&#x27;&#x27;&lt;/a&gt;");
  });


});

describe("parseHtmlToObject", () => {
  it("parses html", () => {
    const element: HTMLCollection = parseHtmlToObject("<div><span>a</span></div>");
    expect(element != null && element!.item(0)!.firstChild!.textContent === "a");
  });
});

describe("compileTemplate", () => {
  it("compiles template html", () => {
    const element: HTMLCollection = compileTemplate("<div><span>{{key}}</span></div>",{"key":"a"});
    expect(element != null && element!.item(0)!.firstChild!.textContent === "a");
  });

  it("compiles template html", () => {
    const element: HTMLCollection = compileTemplate("<div><span>{{key}}</span></div>", {"key1":"a"});
    expect(element != null && element!.item(0)!.firstChild!.textContent === "");
  });

});