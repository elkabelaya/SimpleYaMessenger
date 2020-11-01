import Error from "../../js/components/error/error.js"

document.addEventListener("DOMContentLoaded", ()=>{
  const context = {
    code:404,
    text:"Мы уже фиксим"
  };

  function render(query, block) {

    const root = document.querySelector(query);
    root.appendChild(block.element);
    return root;
  }

  const item = new Error(context);
  // app — это id дива в корне DOM
  render(".sample", item);
});
