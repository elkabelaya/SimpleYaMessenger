import BaseService from "./base_service"
import Router from "../utils/router/router";
import { ROUTE_LOGIN, ROUTE_MESSENGER } from "../utils/router/routes";

export default class CheckAuthService extends BaseService {

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
