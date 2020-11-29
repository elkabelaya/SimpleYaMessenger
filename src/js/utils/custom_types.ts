export type stringKeyObject = {
    [key: string]: object
}
export interface stringKeyString {
  [key:string]: string;
}

export interface INewable<T> {
 new( ...args: any[] ): T;
}
