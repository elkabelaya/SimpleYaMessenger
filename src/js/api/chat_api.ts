
import { chatApiInstance } from "./api_instances";
import { BaseAPI } from "./base_api";
import { stringKeyString } from "../utils/custom_types";
export class ChatAPI extends BaseAPI {
    //TODO - дизайн и логика для "создать новый чат"
    //создать новый чат
    create(_data?:stringKeyString):Promise<XMLHttpRequest> {
      return chatApiInstance.post('/');
    }

    //список чатов пользователя
    request():Promise<XMLHttpRequest> {
      return chatApiInstance.get('/');
    }


}
