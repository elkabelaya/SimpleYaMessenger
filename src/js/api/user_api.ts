import { userApiInstance } from "./api_instances";
import { BaseAPI } from "./base_api";
import { stringKeyObject } from "../utils/custom_types";
export class UserAPI extends BaseAPI {

  update(data?:stringKeyObject):Promise<XMLHttpRequest>  {
    return userApiInstance.put('/profile',{data:data});
  }

  updateAvatar(data:stringKeyObject):Promise<XMLHttpRequest>  {
    return userApiInstance.put('/profile/avatar', {data:data});
  }

  updatePassword(data:stringKeyObject):Promise<XMLHttpRequest>  {
    return userApiInstance.put('/password', {data:data});
  }

}
