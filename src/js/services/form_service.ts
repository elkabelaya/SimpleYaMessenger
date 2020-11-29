export default class FormService{
  protected _form?:HTMLFormElement;
  start(form?:HTMLFormElement|null){

    if (form){
      this._form = form;
      form.setAttribute("novalidate", "true");
      form.addEventListener("submit", this._submitForm.bind(this));
      form.addEventListener("focus", handleForm, true);
      form.addEventListener("blur", handleForm, true);
    }
  }

  submit(_data?:unknown){
    throw new Error("Method not implemented.");
  }
  _submitForm (event:Event): void {
    event.preventDefault();
    if (validateForm(event.target) && !!this){
      var formObject:any = {};
      var formData = new FormData(this._form);
      formData.forEach(function(value, key){
          formObject[key] = value;
      });

      this.submit(formObject);
    }

  }
}




const handleForm: EventListener = (event:Event): void => {
  validate(event.target);

}

function validate(target:any):boolean{
  const isValid = isValidInput(target);
  if (!isValid){
    target.classList.add("invalid");

  } else  {
    target.classList.remove("invalid");
  }

  return isValid;
}

function isValidInput(input:any){
  return !!input.value && input.value.search(input.pattern) === 0;
}

function validateForm(form:any):boolean {

  const inputs = form.querySelectorAll(".input__input");
  let isValid = true;
  inputs.forEach( (input:HTMLElement) => {
    isValid = validate(input) && isValid;
  });

  return isValid;
}
