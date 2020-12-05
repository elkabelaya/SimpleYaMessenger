
import { IApi } from "../api/iapi/iapi";
import { ChatAPI } from "../api/chat_api";
import { IStore } from "../stores/istore";
import Router from "../utils/router/router";
import FormService from "./form_service";
import { ROUTE_MESSENGER } from "../utils/router/routes";
import { stringKeyString } from "../utils/custom_types";

export default class CreateChatService extends FormService {
  private _api: IApi;

  constructor(store:IStore){
    super();
    this._api = new ChatAPI();
  }

  private  onSuccess(xhr:XMLHttpRequest){
    (new Router()).go(ROUTE_MESSENGER);
  }

  private onError(_xhr:XMLHttpRequest){

  }

  submit(_data:stringKeyString){
    this._api.create(_data)
    .then( xhr => {
      this.onSuccess(xhr);
    })
    .catch( xhr => {
      this.onError(xhr);
    })
  }
}
