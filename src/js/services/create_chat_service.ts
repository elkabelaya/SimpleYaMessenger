import Router from "../utils/router/router";
import FormService from "./form_service";
import { ROUTE_MESSENGER } from "../utils/router/routes";
import { stringKeyString } from "../utils/custom_types";
import {STORE_CHATS_LIST} from "../stores/store_fields";
import {IChatItemCtx} from "../components/icomponents/ichat_item"
export default class CreateChatService extends FormService {

  private  onSuccess(xhr:XMLHttpRequest,_data:stringKeyString){
      let chat = Object.assign(_data, JSON.parse(xhr.response));
      let chats =  this._store.get(STORE_CHATS_LIST) as Array<stringKeyString> || [];
      chats.push(chat);
      this._store.set(chats,STORE_CHATS_LIST);

      (new Router()).go(ROUTE_MESSENGER);
  }

  private onError(_xhr:XMLHttpRequest){

  }

  submit(_data:stringKeyString){
    this._api.create(_data)
    .then( xhr => {
      this.onSuccess(xhr,_data);
    })
    .catch( xhr => {
      this.onError(xhr);
    })
  }
}
