import AccountWidget from "../../js/widgets/account_widget/account_widget.js"

document.addEventListener("DOMContentLoaded", ()=>{
  const context = {
    url:"../../../images/empty_logo.jpg"
  };

  function render(query, block) {

    const root = document.querySelector(query);
    root.appendChild(block.element);
    return root;
  }

  const item = new AccountWidget(context);
  // app — это id дива в корне DOM
  render(".sample", item);
});
