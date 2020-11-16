
import { IApi } from "../api/iapi/iapi";
import { AuthAPI } from "../api/auth_api";
import { IStore } from "../stores/istore";
import Router from "../utils/router/router";
import FormService from "./form_service";
import { ROUTE_REGISTER } from "../utils/router/routes";

export default class RegisterService extends FormService {
  private _store:IStore
  private _api: IApi;
  private  onSuccess(xhr:XMLHttpRequest){
    this._store.set(JSON.parse(xhr.response));
    (new Router()).go("/");
  }

  private onError(_xhr:XMLHttpRequest){
    this._store.set({});
    (new Router()).go(ROUTE_REGISTER);
  }
  constructor(store:IStore){
    super();
    this._store = store;
    this._api = new AuthAPI();
  }

  submit(_data:object){
    this._api.create(_data)
    .then( xhr => {
      this.onSuccess(xhr);
    })
    .catch( xhr => {
      //WTF? 400: "error":"bad format","reason":"first_name is empty, but required"
      // but really - user was authorised successfully
      if(xhr.status === 400){
        this.onSuccess(xhr);
      } else {
        this.onError(xhr);
      }
    }

    )
  }
}
