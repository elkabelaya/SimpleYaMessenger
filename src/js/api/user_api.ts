import { userApiInstance } from "./api_instances";
import { BaseAPI } from "./base_api";

export class UserAPI extends BaseAPI {

  update(data?:object):Promise<XMLHttpRequest>  {
    return userApiInstance.put('/profile',{data:data});
  }

  updateAvatar(data:object):Promise<XMLHttpRequest>  {
    return userApiInstance.put('/profile/avatar', {data:data});
  }

  updatePassword(data:object):Promise<XMLHttpRequest>  {
    return userApiInstance.put('/password', {data:data});
  }

}
