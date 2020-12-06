
import { chatTransportInstance } from "./transport_instances";
import { BaseAPI } from "./base_api";
import { stringKeyString } from "../utils/custom_types";

export default class ChatAPI extends BaseAPI {
    //TODO - дизайн и логика для "создать новый чат"
    //создать новый чат
    create(_data?:stringKeyString):Promise<XMLHttpRequest> {
      return chatTransportInstance.post('/', {data:_data});
    }

    //список чатов пользователя
    request():Promise<XMLHttpRequest> {
      return chatTransportInstance.get('/');
    }


}
