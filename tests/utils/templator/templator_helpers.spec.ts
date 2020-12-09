import {
  fillTemplates,
  getParamForTemplateKey,
  sanitise,
  parseHtmlToObject,
  compileTemplate
} from "../../../src/utils/templator/templator_helpers"


describe("fillTemplates", () => {
  it("fills template", () => {
    expect(fillTemplates("some string: {{key}}", {"key":"value"})).toBe("some string: value");
  });

  it("fills few templates", () => {
    expect(fillTemplates("some string: {{key}}, other string: {{key}}", {"key":"value"})).toBe("some string: value, other string: value");
  });

  it("fills  templates with spaces", () => {
    expect(fillTemplates("{{ key}},{{key   }},{{   key   }}", {"key":"value"})).toBe("value,value,value");
  });
  it("fills  unknown", () => {
    expect(fillTemplates("key:{{unknown_key}}", {"key":"value"})).toBe("key:");
  });

});


describe("getParamForTemplateKey", () => {
  it("get string param", () => {
    expect(getParamForTemplateKey("key", {"key":"value"})).toBe("value");
  });
  it("get number param", () => {
    expect(getParamForTemplateKey("key", {"key":2})).toBe("2");
  });

  it("get undefined param", () => {
    expect(getParamForTemplateKey("key_", {"key":2})).toBe("");
  });

  it("get object param", () => {
    try{
      getParamForTemplateKey("key", {"key":{"a":2}});
      expect(false).toBeTruthy();
    } catch(e){
      expect(true).toBeTruthy();
    }
  });

  it("get function param", () => {
    try{
      getParamForTemplateKey("key", {"key":()=>{}});
      expect(false).toBeTruthy();
    } catch(e){
      expect(true).toBeTruthy();
    }
  });


});


describe("sanitise", () => {
  it("escapes simbols", () => {
    expect(sanitise("<a>&''</a>")).toBe("&lt;a&gt;&amp;&#x27;&#x27;&lt;/a&gt;");
  });


});

describe("parseHtmlToObject", () => {
  it("parses html", () => {
    const element: HTMLCollection = parseHtmlToObject("<div><span>a</span></div>");
    expect(element != null && element!.item(0)!.firstChild!.textContent).toBe("a");
  });
});

describe("compileTemplate", () => {
  it("compiles template html", () => {
    const element: HTMLCollection = compileTemplate("<div><span>{{key}}</span></div>",{"key":"a"});
    expect(element != null && element!.item(0)!.firstChild!.textContent).toBe("a");
  });

  it("compiles template html", () => {
    const element: HTMLCollection = compileTemplate("<div><span>{{key}}</span></div>", {"key1":"a"});
    expect(element != null && element!.item(0)!.firstChild!.textContent).toBe("");
  });

});
