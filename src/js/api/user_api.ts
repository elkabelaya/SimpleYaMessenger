import { userTransportInstance } from "./transport_instances";
import { BaseAPI } from "./base_api";
import { stringKeyString } from "../utils/custom_types";

export default class UserAPI extends BaseAPI {

  update(data?:stringKeyString):Promise<XMLHttpRequest>  {
    return userTransportInstance.put('/profile',{data:data});
  }

  updateAvatar(data:FormData):Promise<XMLHttpRequest>  {
    return userTransportInstance.put('/profile/avatar', {data:data});
  }

  updatePassword(data:stringKeyString):Promise<XMLHttpRequest>  {
    return userTransportInstance.put('/password', {data:data});
  }

}
