
import { authApiInstance } from "./api_instances";
import { BaseAPI } from "./base_api";

export class AuthAPI extends BaseAPI {


    create(data:unknown):Promise<XMLHttpRequest> {
      return authApiInstance.post('/signup',{data:data});
    }

    request(data:unknown):Promise<XMLHttpRequest> {
      return authApiInstance.post('/signin',{data:data});
    }




}
