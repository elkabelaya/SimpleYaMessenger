import { userApiInstance } from "./api_instances";
import { BaseAPI } from "./base_api";
import { stringKeyString } from "../utils/custom_types";
export class UserAPI extends BaseAPI {

  update(data?:stringKeyString):Promise<XMLHttpRequest>  {
    return userApiInstance.put('/profile',{data:data});
  }

  updateAvatar(data:stringKeyString):Promise<XMLHttpRequest>  {
    return userApiInstance.put('/profile/avatar', {data:data});
  }

  updatePassword(data:stringKeyString):Promise<XMLHttpRequest>  {
    return userApiInstance.put('/password', {data:data});
  }

}
