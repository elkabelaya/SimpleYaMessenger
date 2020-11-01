import LoginWidget from "../../js/widgets/login_widget/login_widget.js"

document.addEventListener("DOMContentLoaded", ()=>{




  function render(query, block) {
    const root = document.querySelector(query);
    root.appendChild(block.element);
    return root;
  }

  const item = new LoginWidget();
  // app — это id дива в корне DOM
  render(".sample", item);
});
