import { IApi } from "./iapi/iapi";
import { stringKeyObject } from "../utils/custom_types";
export class BaseAPI implements IApi {

    create(_data?:stringKeyObject):Promise<XMLHttpRequest> {
      throw new Error("Method not implemented.");
    }

    request(_data?:stringKeyObject):Promise<XMLHttpRequest> {
      throw new Error("Method not implemented.");
    }

    update(_data?:stringKeyObject):Promise<XMLHttpRequest>  {
      throw new Error("Method not implemented.");
    }
    delete():Promise<XMLHttpRequest>  {
      throw new Error("Method not implemented.");
    }
}
