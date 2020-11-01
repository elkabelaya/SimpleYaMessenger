import {IEventBus, IEventBusCallbackFunction} from "./ievent_bus"

export default class EventBus implements IEventBus {
  _listeners:object;

  constructor() {
    this._listeners = {};
  }

  on(event:string, callback:IEventBusCallbackFunction): void {
    if (!this._listeners[event]) {
      this._listeners[event] = [];
    }

    this._listeners[event].push(callback);
  }

  off(event:string, callback:IEventBusCallbackFunction): void{
	  if (!this._listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    this._listeners[event] = this._listeners[event].filter(
      (listener: IEventBusCallbackFunction) => listener !== callback
    );
  }

  emit(event:string, ...args:object[]): void{
    if (!this._listeners[event]) {
      return;
    }

    this._listeners[event].forEach( (listener:IEventBusCallbackFunction)=> listener(...args));
  }
}
