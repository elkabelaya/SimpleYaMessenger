import {ITemplator} from './itemplator';
import {compileTemplate} from './templator_helpers';
import * as ROUTES from '../router/routes';
export default class Templator implements ITemplator {
	_template: string;

	constructor(template: string) {
		this._template = template;
	}

	compile(ctx: Record<string, unknown>): HTMLCollection {
		return compileTemplate(this._template, ctx, ROUTES);
	}
}
