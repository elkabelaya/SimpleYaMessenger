import { IEventBus } from "../utils/event_bus/ievent_bus";

export interface IStore  extends IEventBus{

  get(selector:string):object
  set(value:object):void
}
