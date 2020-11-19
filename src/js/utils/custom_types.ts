export type stringKeyObject = {
    [key: string]: object
}

export interface INewable<T> {
	new( ...args: any[] ): T;
}
