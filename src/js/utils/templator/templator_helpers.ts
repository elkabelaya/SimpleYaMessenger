

  const OBJECT_PATH_DELIMITER:string = '.';
  const HTML_ESCAPE_SYMBOLS:Map<string, string> = new Map([
      ['&', '&amp;'],
      ['<', '&lt;'],
      ['>', '&gt;'],
      ['"', '&quot;'],
      ["'", '&#x27;']
    ]);

  const TEMPLATE_REGEXP =/{{ *(.*?) *}}+/g;
  const HTML_ESCAPE_REGEXP =/[&<>"']/g;



  export function isObjectKey( key: string) {
    return key.indexOf(OBJECT_PATH_DELIMITER) > 0;
  }

  export function getValueFromObject( path:string, obj: any,  defaultValue: string|number) {
    const keys:string[] = path.split(OBJECT_PATH_DELIMITER);

    let result = obj;
    for (let key of keys) {
      result = result[key];
      if (result === undefined) {
        return defaultValue;
      }
    }
    //0 ->0
    // null -> defaultValue
    // undefined -> defaultValue
    // someValue -> someValue
    return result == null? defaultValue: result;
  }

  export function fillTemplates(template: string, ctx: object){
    return template.replace( TEMPLATE_REGEXP, ( _fullMatch:string, group1:string )=>getParamForTemplateKey( group1, ctx ) );
  }

  export function getParamForTemplateKey( key:string, ctx:any){
    const element:unknown = isObjectKey(key)? getValueFromObject(key, ctx, ""): ctx[key];

    switch (typeof element){
        case "undefined":
          return "";
        case "string":
        case "number":
          return sanitise(String(element));
        case "object":
          throw new Error("Incorrect path in object!");
        case "function":
          throw new Error("Do not use function in html!");
        default:
          throw new Error("Unsupported type found");
        //TODO - разобраться, нужна ли мне здесь поддержка массива и в каком виде

      }
  }


  export function sanitise(value:string = '') {
      return (value + '').replace(HTML_ESCAPE_REGEXP, (symbol) => HTML_ESCAPE_SYMBOLS.get(symbol)||'');
  }

  export function parseHtmlToObject(html: string): HTMLCollection{
    return (new DOMParser()).parseFromString(html, "text/html").body.children;
  }

  export function compileTemplate(template:string, ctx:object): HTMLCollection {
    return parseHtmlToObject( fillTemplates(template, ctx));
  }
