import ListService from "./list_service";
import {
    STORE_CHATS_LIST,
    STORE_CHATS_CURRENT,
} from "../stores/store_fields";
import {IChatItemCtx} from  "../components/icomponents/ichat_item"
export default class ChatsService extends ListService {

 private  onSuccess(xhr:XMLHttpRequest){
    this._store.set(JSON.parse(xhr.response), STORE_CHATS_LIST);

  }

  private onError(_xhr:XMLHttpRequest){
    this._store.set([], STORE_CHATS_LIST);

  }

  start(list){
      super.start(list);
      if (this._store.get(STORE_CHATS_LIST)){
          return;
      }

    this._api.request()
    .then( xhr => {
      this.onSuccess(xhr);
    })
    .catch( xhr => {
      this.onError(xhr);
    }

    )
  }

  select(id:number):void{

      let chatsArray:Array<IChatItemCtx> = this._store.get(STORE_CHATS_LIST) as Array<IChatItemCtx>;
      let chat = chatsArray.filter(element => {
          return element.id === id;
      })[0];
      this._store.set(chat,STORE_CHATS_CURRENT);
  }
}
