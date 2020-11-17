
import { IApi } from "../api/iapi/iapi";
import { ChatAPI } from "../api/chat_api";
import { IStore } from "../stores/istore";
import FormService from "./form_service";

export default class ChatsService extends FormService {

  private _store:IStore
  private _api: IApi;
  private  onSuccess(xhr:XMLHttpRequest){
    this._store.set(JSON.parse(xhr.response));

  }

  private onError(_xhr:XMLHttpRequest){
    //сейчас всегда 500, замокаем для отладки
    this._store.set([{
      logo: "../../../images/empty_logo.jpg",
      name: "Baся",
      message: "привет",
      time: "12:30",
      alert: "4"
    }]);
    //TODO error display

  }
  constructor(store:IStore){
    super();
    this._store = store;
    this._api = new ChatAPI();
  }
  start(){
    //всегда 500 (((, TODO: проверить!
    this._api.request()
    .then( xhr => {
      this.onSuccess(xhr);
    })
    .catch( xhr => {
      this.onError(xhr);
    }

    )
  }
}
