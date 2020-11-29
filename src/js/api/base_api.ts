import { IApi } from "./iapi/iapi";
import { stringKeyString } from "../utils/custom_types";
export class BaseAPI implements IApi {

    create(_data?:stringKeyString):Promise<XMLHttpRequest> {
      throw new Error("Method not implemented.");
    }

    request(_data?:stringKeyString):Promise<XMLHttpRequest> {
      throw new Error("Method not implemented.");
    }

    update(_data?:stringKeyString):Promise<XMLHttpRequest>  {
      throw new Error("Method not implemented.");
    }
    delete():Promise<XMLHttpRequest>  {
      throw new Error("Method not implemented.");
    }
}
