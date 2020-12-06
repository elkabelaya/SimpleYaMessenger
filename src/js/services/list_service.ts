import BaseService from './base_service'

export default abstract class ListService  extends BaseService {
  protected _list:HTMLCollection;
  protected _selectedElement:HTMLElement;

  start(list:HTMLCollection){
      this._list = list!;
      Array.from(list).forEach(element => {
          element.addEventListener("click", this._selectElement.bind(this));
      });

  }

  abstract select(id:number):void;

  _selectElement (event:Event): void {
    if(  this._selectedElement){
        this._selectedElement.classList.remove("selected");
    }
    this._selectedElement = event?.currentTarget as HTMLElement;
    this._selectedElement.classList.add("selected");
    this.select(+this._selectedElement.id);

 }
}
