export enum EMessageType {
	in,
	out,
	img,
	date
}

export interface IMessageCtx {
	type: EMessageType;
	value?: string;
	url?: string;
	time: string;
}
