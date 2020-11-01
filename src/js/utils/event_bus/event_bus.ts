import {IEventBus, IEventBusCallbackFunction} from "./ievent_bus"

export default class EventBus implements IEventBus {
  _listeners:Map<string,IEventBusCallbackFunction[]>;

  constructor() {
    this._listeners = new Map();
  }

  on(event:string, callback:IEventBusCallbackFunction): void {
    let eventListeners:IEventBusCallbackFunction[]|undefined = this._listeners.get(event);
    if (!eventListeners) {
      eventListeners = [];
      this._listeners.set(event,eventListeners);
    }

    eventListeners.push(callback);
  }

  off(event:string, callback:IEventBusCallbackFunction): void{
    let eventListeners:IEventBusCallbackFunction[]|undefined = this._listeners.get(event);
	  if (!eventListeners) {
      throw new Error(`Нет события: ${event}`);
    }

    this._listeners.set(event,eventListeners.filter(
        (listener: IEventBusCallbackFunction) => listener !== callback
      ));

  }

  emit(event:string, ...args:object[]): void{
    let eventListeners:IEventBusCallbackFunction[]|undefined = this._listeners.get(event);
	  if (!eventListeners) {
      return;
    }

    eventListeners.forEach( (listener:IEventBusCallbackFunction)=> listener(...args));



  }
}
