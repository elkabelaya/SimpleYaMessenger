import { AuthAPI } from "../api/auth_api";
import { UserAPI } from "../api/user_api";
import { IStore } from "../stores/istore";
import FormService from "./form_service";
//import {stringKeyObject} from "../utils/custom_types"

export default class AccountService extends FormService {
  private _store:IStore
  private _updateApi: UserAPI;
  private _requestApi: AuthAPI;
  private _avatarInput?:HTMLInputElement;

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

    if (form){
        this._avatarInput = form?.elements.namedItem("avatar") as HTMLInputElement;
        this._avatarInput?.addEventListener("change",this.handleAvatar.bind(this));
        if (this._store.get()) {
          return;
        }
    }

    this._requestApi.update().then( xhr => {
      this._store.set(JSON.parse(xhr.response));
    }).catch( _xhr => {
      this._store.set({});
    })


  }

  submit(_data:any){
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
      this.onError(xhr);
    })
  }

  handleAvatar(event:Event) {

      const inputElement = event?.target as HTMLInputElement;

      if (inputElement && inputElement.files && inputElement.files.length > 0){
          console.log("handleAvatar1");
          var reader = new FileReader();
          reader.onload = ()=>{
              console.log("handleAvatar2",reader.result as string);
              if (this !== undefined){
                  const imgs = this._form?.getElementsByTagName("img");
                  const img = imgs?.length ? imgs[0]: undefined
                  if (img){
                      img.src = reader.result as string;
                  }
              }


          }
          reader?.readAsDataURL(inputElement.files[0]);
      }
  }
}
