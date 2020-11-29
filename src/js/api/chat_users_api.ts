
import { chatUsersApiInstance } from "./api_instances";
import { BaseAPI } from "./base_api";
import { stringKeyString } from "../utils/custom_types";
export class ChatUsersAPI extends BaseAPI {
  //TODO отрисовать дизайн - не предусмотрены элементы для этого функционала

  //Add users to chat
    create(data:stringKeyString):Promise<XMLHttpRequest> {
      return chatUsersApiInstance.put('/', {data:data});
    }
    //Delete users from chat
    request(data:stringKeyString):Promise<XMLHttpRequest> {
      return chatUsersApiInstance.delete('/', {data:data});
    }

}
