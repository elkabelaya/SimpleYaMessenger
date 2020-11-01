export default class FormValidator{
  constructor(form?:HTMLFormElement|null){
    if (form){
      form.setAttribute("novalidate", "true");
      form.addEventListener("submit", handleForm);
      form.addEventListener("focus", handleForm, true);
      form.addEventListener("blur", handleForm, true);
    }
  }
}


const handleForm: EventListener = (event:Event): void => {
  event.preventDefault();
  console.log(event)
  validateForm(event.target);


}

function validate(target:HTMLElement){
  if (!isValidInput(target)){
    target.classList.add("invalid");

  } else  {
    target.classList.remove("invalid");
  }
}

function isValidInput(input:any){
  return !!input.value && input.value.indexOf(input.pattern) >= 0;
}

function validateForm(form:any){
  const inputs = form.querySelectorAll(".input__input");
  console.log("validateForm")
  inputs.forEach( (input:HTMLElement) => {
    validate(input);
  });
}
