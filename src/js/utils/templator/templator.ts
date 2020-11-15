import {ITemplator} from "./itemplator";
import {compileTemplate} from "./templator_helpers";

export default class Templator implements ITemplator{
  _template: string;

  constructor(template: string) {
      this._template = template;
  }

  compile(ctx:object): HTMLCollection {
    return compileTemplate(this._template, ctx);
  }
}
