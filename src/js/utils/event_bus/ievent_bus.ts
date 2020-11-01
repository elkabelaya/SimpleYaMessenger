export interface IEventBusCallbackFunction{
  (...args:object[]): void;
}

export interface IEventBus {
  on(event:string, callback: IEventBusCallbackFunction): void,
  off(event:string, callback: IEventBusCallbackFunction): void,
  emit(event:string, ...args: object[]): void,
}
