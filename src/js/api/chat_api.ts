
import { chatApiInstance } from "./api_instances";
import { BaseAPI } from "./base_api";

export class ChatAPI extends BaseAPI {
    //TODO - дизайн для "Новый чат"

    //создать новый чат
    create():Promise<XMLHttpRequest> {
      return chatApiInstance.post('/');
    }
    //список чатов пользователя
    request():Promise<XMLHttpRequest> {
      return chatApiInstance.get('/');
    }


}
