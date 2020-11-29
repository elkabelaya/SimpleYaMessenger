
import { IApi } from "../api/iapi/iapi";
import { AuthAPI } from "../api/auth_api";
import { IStore } from "../stores/istore";
import Router from "../utils/router/router";
import FormService from "./form_service";
import { ROUTE_REGISTER } from "../utils/router/routes";
import { stringKeyString } from "../utils/custom_types";

export default class RegisterService extends FormService {
  private _store:IStore
  private _api: IApi;

  constructor(store:IStore){
    super();
    this._store = store;
    this._api = new AuthAPI();
  }
  private  onSuccess(xhr:XMLHttpRequest){
    this._store.set(JSON.parse(xhr.response));
    (new Router()).go("/");
  }

  private onError(_xhr:XMLHttpRequest){
    this._store.set({});
    (new Router()).go(ROUTE_REGISTER);
  }
  submit(_data:stringKeyString){
    this._api.create(_data)
    .then( xhr => {
      this.onSuccess(xhr);
    })
    .catch( xhr => {
      this.onError(xhr);
    }

    )
  }
}
