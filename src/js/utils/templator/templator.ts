import {ITemplator} from "./itemplator";

export default class Templator implements ITemplator{
  _template: string;

  constructor(template: string) {
      this._template = template;
  }

  compile(ctx:object): HTMLCollection {
    return _compileTemplate(this._template, ctx);
  }
}


  const OBJECT_PATH_DELIMITER = '.';
  const HTML_ESCAPE_SYMBOLS = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#x27;'
  };

  const TEMPLATE_REGEXP =/{{ *(.*?) *}}+/g;
  const HTML_ESCAPE_REGEXP =/[&<>"']/g;

  function _isObjectKey( key: string) {
    return key.indexOf(OBJECT_PATH_DELIMITER) > 0;
  }

  function _getValueFromObject( path:string, obj: object,  defaultValue: string|number) {
    const keys = path.split(OBJECT_PATH_DELIMITER);

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

  function _fillTemplates(template: string, ctx: object){
    return template.replace( TEMPLATE_REGEXP, ( _fullMatch:string, group1:string )=>_getParamForTemplateKey( group1, ctx ) );
  }

  function _getParamForTemplateKey( key:string, ctx:object){
    const element:unknown = _isObjectKey(key)? _getValueFromObject(key, ctx, ""): ctx[key];

    switch (typeof element){
        case "undefined":
          return "";
        case "string":
        case "number":
          return _sanitise(String(element));
        case "object":
          throw new Error("Incorrect path in object!");
        case "function":
          throw new Error("Do not use function in html!");
        default:
          throw new Error("Unsupported type found");
        //TODO - разобраться, нужна ли мне здесь поддержка массива и в каком виде

      }
  }


  function _sanitise(value = '') {
      return (value + '').replace(HTML_ESCAPE_REGEXP, (symbol) =>HTML_ESCAPE_SYMBOLS[symbol]);
  }

  function _parseHtmlToObject(html: string): HTMLCollection{
    return (new DOMParser()).parseFromString(html, "text/html").body.children;
  }

  function _compileTemplate(template:string, ctx:object): HTMLCollection {
    return _parseHtmlToObject( _fillTemplates(template, ctx));
  }
