import { IApi } from "./iapi/iapi";

export class BaseAPI implements IApi {

    create(_data?:object):Promise<XMLHttpRequest> {
      throw new Error("Method not implemented.");
    }

    request(_data?:object):Promise<XMLHttpRequest> {
      throw new Error("Method not implemented.");
    }

    update():Promise<XMLHttpRequest>  {
      throw new Error("Method not implemented.");
    }
    delete():Promise<XMLHttpRequest>  {
      throw new Error("Method not implemented.");
    }
}
