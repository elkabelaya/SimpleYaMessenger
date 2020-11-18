
import { IApi } from "../api/iapi/iapi";
import { AuthAPI } from "../api/auth_api";
import { IStore } from "../stores/istore";
import Router from "../utils/router/router";
import FormService from "./form_service";
import { ROUTE_LOGIN, ROUTE_MESSENGER } from "../utils/router/routes";

export default class LoginService extends FormService {
  private _store:IStore
  private _api: IApi;

  constructor(store:IStore){
    super();
    this._store = store;
    this._api = new AuthAPI();
  }

  private  onSuccess(xhr:XMLHttpRequest){
    this._store.set(JSON.parse(xhr.response));
    (new Router()).go(ROUTE_MESSENGER);
  }

  private onError(_xhr:XMLHttpRequest){
    this._store.set({});
    (new Router()).go(ROUTE_LOGIN);
  }
  
  submit(_data:object){
    this._api.request(_data)
    .then( xhr => {
      this.onSuccess(xhr);
    })
    .catch( xhr => {
      //WTF? 400: {error: "bad format", reason: "login is empty, but required"}
      // but login was sent and really - user was logged successfully
      if(xhr.status === 400){
        this.onSuccess(xhr);
      } else {
        this.onError(xhr);
      }
    }

    )
  }
}
