
import { IApi } from "../api/iapi/iapi";
import { AuthAPI } from "../api/auth_api";
import { IStore } from "../stores/istore";
import Router from "../utils/router/router";
import { ROUTE_LOGIN, ROUTE_MESSENGER } from "../utils/router/routes";

export default class CheckAuthService {
  private _store:IStore
  private _api: IApi;

  constructor(store:IStore){
    this._store = store;
    this._api = new AuthAPI();
  }

  start(){
    this._api.update()
    .then( xhr => {
      this._store.set(JSON.parse(xhr.response));
      (new Router()).go(ROUTE_MESSENGER);
    })
    .catch( _xhr => {
      this._store.set({});
      (new Router()).go(ROUTE_LOGIN);
    }

    )
  }
}
