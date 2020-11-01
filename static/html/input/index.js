import Input from "../../js/components/input/input.js"

document.addEventListener("DOMContentLoaded", ()=>{

  const context1 = {
    name: "phone",
    type: "tel",
    placeholder: "Телефон",
    pattern: "\\+[0-9]{11}",
    requirments: "Введите валидный номер"
  };

  const context2 = {
    name: "mail",
    type: "email",
    placeholder: "Почта",
    requirments: "Введите корректную почту"
  };

  function render(query, block) {
    const root = document.querySelector(query);
    root.appendChild(block.element);
    return root;
  }

  const item1 = new Input(context1);
  const item2 = new Input(context2);

  render(".item1", item1);
  render(".item2", item2);
});
