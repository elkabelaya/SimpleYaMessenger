import {getValueFromObject, isObjectKey} from '../data/data_helpers';

const HTML_ESCAPE_SYMBOLS: Map<string, string> = new Map([
	['&', '&amp;'],
	['<', '&lt;'],
	['>', '&gt;'],
	['"', '&quot;'],
	['\'', '&#x27;']
]);

const TEMPLATE_REGEXP = /{{ *(.*?) *}}+/g;
const HTML_ESCAPE_REGEXP = /[&<>"']/g;

export function fillTemplates(template: string, ctx?: Record<string, unknown>, fillUncknown = true) {
	return template.replace(TEMPLATE_REGEXP, (_fullMatch: string, group1: string) => getParamForTemplateKey(group1, ctx, fillUncknown));
}

export function getParamForTemplateKey(key: string, ctx?: any, fillUncknown = true): string {
	const element: unknown = isObjectKey(key) ? getValueFromObject(key, ctx, '') : ctx ? ctx[key] : undefined;

	switch (typeof element) {
		case 'undefined':
			return !fillUncknown ? `{{${key}}}` : '';
		case 'string':
		case 'number':
			return sanitise(String(element));
		case 'object':
			throw new Error('Incorrect path in object!');
		case 'function':
			throw new Error('Do not use function in html!');
		default:
			throw new Error('Unsupported type found');
        // TODO - разобраться, нужна ли мне здесь поддержка массива и в каком виде
	}
}

export function sanitise(value = '') {
	return (String(value)).replace(HTML_ESCAPE_REGEXP, symbol => HTML_ESCAPE_SYMBOLS.get(symbol) || '');
}

export function parseHtmlToObject(html: string): HTMLCollection {
	return (new DOMParser()).parseFromString(html, 'text/html').body.children;
}

export function compileTemplate(template: string, ctx: Record<string, unknown>, routes?: Record<string, unknown>): HTMLCollection {
	return parseHtmlToObject(fillTemplates(fillTemplates(template, routes, false), ctx));
}
