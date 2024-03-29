import {ITemplator} from 'utils/templator/itemplator';
import {compileTemplate} from './templator_helpers';
import * as ROUTES from 'utils/router/routes';

export default class Templator implements ITemplator {
	_template: string;

	constructor(template: string) {
		this._template = template;
	}

	compile(ctx: unknown): HTMLCollection {
		return compileTemplate(this._template, ctx, ROUTES);
	}
}
