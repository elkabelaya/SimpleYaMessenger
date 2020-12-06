import { IApi } from "../api/iapi/iapi";
import {IStore} from "../stores/istore"
import  UserAPI  from "../api/user_api";
import FormService from "./form_service";

//import {stringKeyObject} from "../utils/custom_types"

export default class AccountService extends FormService {
  private _updateApi: UserAPI;
  private _avatarInput?:HTMLInputElement;

  private  onSuccess(){
    //do nothing
  }

  private onError(_xhr:XMLHttpRequest){

    //TODO отображение ошибки
  }
  constructor(store:IStore, requestApi:IApi, updateApi:UserAPI){
    super(store, requestApi);

    this._updateApi = updateApi;

  }

  start(form:HTMLFormElement){

    super.start(form);


    this._avatarInput = form?.elements.namedItem("avatar") as HTMLInputElement;
    this._avatarInput?.addEventListener("change",this.handleAvatar.bind(this));
    if (this._store.get()) {
      return;
    }


    this._api.update().then( xhr => {
      this._store.set(JSON.parse(xhr.response));
    }).catch( _xhr => {
      this._store.set({});
    })


  }

  submit(_data:any){


    let promises =[ this._updateApi.update(_data)];


      if(this._avatarInput && this._avatarInput.files && this._avatarInput?.files.length > 0){
          let formData = new FormData();
          formData.append('avatar', this._avatarInput.files[0]);
          promises.push(this._updateApi.updateAvatar(formData));
      }

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
