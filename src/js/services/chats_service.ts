
import { IApi } from "../api/iapi/iapi";
import { ChatAPI } from "../api/chat_api";
import { IStore } from "../stores/istore";
import FormService from "./form_service";

export default class ChatsService extends FormService {

  private _store:IStore
  private _api: IApi;
  private  onSuccess(xhr:XMLHttpRequest){
    //this._store.set(JSON.parse(xhr.response));
    console.log(JSON.parse(xhr.response));
    console.log([{
      avatar: "../../../images/empty_logo.jpg",
      title: "Baся",
      id:110

  }]);
    //пока не реализован функционал добавления чата,  замокаем для отладки
    // TODO: изменить!
    //this._store.set(JSON.parse('[{"id":110,"title":"мой чат1","avatar":null,"created_by":772}]'));
    //TODO error display
  }

  private onError(_xhr:XMLHttpRequest){
    this._store.set([]);
    //TODO error display

  }
  constructor(store:IStore){
    super();
    this._store = store;
    this._api = new ChatAPI();
  }
  start(){
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
