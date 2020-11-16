export interface IApi {
  create(_data?:unknown):Promise<XMLHttpRequest>,
  request(_data?:unknown):Promise<XMLHttpRequest>,
  update(_data?:unknown):Promise<XMLHttpRequest>,
  delete(): Promise<XMLHttpRequest>,
}
