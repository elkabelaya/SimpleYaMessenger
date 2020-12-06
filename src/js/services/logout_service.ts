import Router from "../utils/router/router";
import FormService from "./form_service";
import { ROUTE_LOGIN } from "../utils/router/routes";
import { stringKeyString } from "../utils/custom_types";

export default class LogoutService extends FormService {
    //TODO отрисовать дизайн разлогина, сейчас такого функционала нет
  private  onSuccess(xhr:XMLHttpRequest){
    this._store.set(JSON.parse(xhr.response));
    (new Router()).go(ROUTE_LOGIN);
  }

  private onError(_xhr:XMLHttpRequest){
    this._store.set({});
    (new Router()).go("/logout_widget/");

  }

  submit(_data:stringKeyString){
    this._api.request(_data)
    .then( xhr => {
      this.onSuccess(xhr);
    })
    .catch( xhr => {
      this.onError(xhr);
    }

    )
  }
}
