import RegisterWidget from "../../js/widgets/register_widget/register_widget.js"

document.addEventListener("DOMContentLoaded", ()=>{




  function render(query, block) {
    const root = document.querySelector(query);
    root.appendChild(block.element);
    return root;
  }

  const item = new RegisterWidget();
  // app — это id дива в корне DOM
  render(".sample", item);
});
