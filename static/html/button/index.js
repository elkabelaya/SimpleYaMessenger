import Button from "../../js/components/button/button.js"

document.addEventListener("DOMContentLoaded", ()=>{
  const context = {
    title:"Авторизоваться"
  };

  function render(query, block) {

    const root = document.querySelector(query);
    root.appendChild(block.element);
    return root;
  }

  const chatItem = new Button(context);
  // app — это id дива в корне DOM
  render(".sample", chatItem);
});
