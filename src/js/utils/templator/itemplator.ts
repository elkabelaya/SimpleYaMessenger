export interface ITemplator{
	compile(ctx: Record<string, unknown>): HTMLCollection;
}
