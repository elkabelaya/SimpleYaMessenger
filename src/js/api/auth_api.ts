import { stringKeyString } from "../utils/custom_types";
import { authTransportInstance } from "./transport_instances";
import { BaseAPI } from "./base_api";
export default class AuthAPI extends BaseAPI {


    create(data:stringKeyString):Promise<XMLHttpRequest> {
      return authTransportInstance.post('/signup',{data:data});
    }

    request(data:stringKeyString):Promise<XMLHttpRequest> {
      return authTransportInstance.post('/signin',{data:data});
    }

    update():Promise<XMLHttpRequest>  {
      return authTransportInstance.get('/user');
    }

    delete():Promise<XMLHttpRequest> {
      return authTransportInstance.post('/logout');
    }





}
