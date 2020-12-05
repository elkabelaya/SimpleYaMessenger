export type stringKeyObject = {
    [key: string]: object
}
export interface stringKeyString {
  [key:string]: string| File;
}

export interface INewable<T> {
 new( ...args: any[] ): T;
}

export interface Event<T = EventTarget> {
  target: T;
}
