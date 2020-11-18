import { AuthAPI } from "../api/auth_api";
import { UserAPI } from "../api/user_api";
import { IStore } from "../stores/istore";
import FormService from "./form_service";

export default class AccountService extends FormService {
  private _store:IStore
  private _updateApi: UserAPI;
  private _requestApi: AuthAPI;
  private  onSuccess(){
    //do nothing
  }

  private onError(_xhr:XMLHttpRequest){

    //TODO отображение ошибки
  }
  constructor(store:IStore){
    super();

    this._store = store;
    this._updateApi = new UserAPI();
    this._requestApi = new AuthAPI();
  }

  start(form?:HTMLFormElement|null){

    super.start(form);
    if (!this._store.get()){
      this._requestApi.update().then( xhr => {
        this._store.set(JSON.parse(xhr.response));
      }).catch( _xhr => {
        this._store.set({});
      })
    }

  }

  submit(_data:any){
    console.log("submit", _data);
    let promises =[ this._updateApi.update(_data),
                    this._updateApi.updateAvatar(_data)
                  ];
    if (_data.old_password !== _data.newpassword){
      promises.push(this._updateApi.updatePassword({"oldpassword": _data.old_password, "newpassword": _data.new_password}));
    }


    Promise.all(promises)
    .then( _dataxhr => {
      this.onSuccess();
    })
    .catch( xhr => {
      //WTF? 400: {error: "bad format", reason: "login is empty, but required"}
      // but login was sent and really - user was logged successfully
      if(xhr.status === 400){
        this.onSuccess();
      } else {
        this.onError(xhr);
      }
    }

    )
  }
}
