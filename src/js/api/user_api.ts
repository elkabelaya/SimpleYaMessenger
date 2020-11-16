import { userApiInstance } from "./api_instances";
import { BaseAPI } from "./base_api";

export class UserAPI extends BaseAPI {

    create():Promise<XMLHttpRequest> {
      return userApiInstance.post('/');
    }

    request():Promise<XMLHttpRequest>  {
      return userApiInstance.get('/');
    }

}
