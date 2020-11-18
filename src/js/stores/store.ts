import { getValueFromObject } from "../utils/data/data_helpers";
import EventBus from "../utils/event_bus/event_bus";
import {IStore} from "./istore"

export default  class Store  extends EventBus implements IStore {
  private _data:object;

  get(selector?:string) {
    return selector? getValueFromObject(selector,this._data):this._data ;
  }

  set( value:object):void{
    this._data = value;
    this.emit("change");
  }
}
