import WidgetHeader from "../../js/components/widget_header/widget_header.js"

document.addEventListener("DOMContentLoaded", ()=>{
  const context = {
    title:"Вход"
  };

  function render(query, block) {

    const root = document.querySelector(query);
    root.appendChild(block.element);
    return root;
  }

  const chatItem = new WidgetHeader(context);
  // app — это id дива в корне DOM
  render(".sample", chatItem);
});
