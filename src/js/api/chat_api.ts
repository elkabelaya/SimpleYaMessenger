
import { chatApiInstance } from "./api_instances";
import { BaseAPI } from "./base_api";
import { stringKeyObject } from "../utils/custom_types";
export class ChatAPI extends BaseAPI {
    //TODO - дизайн и логика для "создать новый чат"
    //создать новый чат
    create(_data?:stringKeyObject):Promise<XMLHttpRequest> {
      return chatApiInstance.post('/');
    }

    //список чатов пользователя
    request():Promise<XMLHttpRequest> {
      return chatApiInstance.get('/');
    }


}
