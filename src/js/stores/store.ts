import { getValueFromObject } from "../utils/data/data_helpers";
import EventBus from "../utils/event_bus/event_bus";
import {IStore} from "./istore"

export default  class Store  extends EventBus implements IStore {
  private _data:object = {};

  get(selector?:string):unknown|unknown[] {
    return selector? getValueFromObject(selector,this._data):this._data ;
  }

  set( value:object, selector?:string):void{
    if(!selector){
      this._data = value;
      } else {
          this._data[selector] = value;
      }

    this.emit("change", selector);
  }
}
