
import { IApi } from "../api/iapi/iapi";
import { UserAPI } from "../api/user_api";
import { IStore } from "../stores/istore";
import Router from "../utils/router/router";
import { ROUTE_LOGIN, ROUTE_SAMPLE_CHATLIST } from "../utils/router/routes";

export default class UserService {
  private _store:IStore
  private _api: IApi;

  constructor(store:IStore){
    this._store = store;
    this._api = new UserAPI();
  }

  start(){
    this._api.request()
    .then( xhr => {
      this._store.set(JSON.parse(xhr.response));
      (new Router()).go(ROUTE_SAMPLE_CHATLIST);
    })
    .catch( _xhr => {
      this._store.set({});
      (new Router()).go(ROUTE_LOGIN);
    }

    )
  }
}
