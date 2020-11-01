import Avatar from "../../js/components/avatar/avatar.js"

document.addEventListener("DOMContentLoaded", ()=>{
  const context = {
    url:"../../../images/empty_logo.jpg"
  };

  function render(query, block) {

    const root = document.querySelector(query);
    root.appendChild(block.element);
    return root;
  }

  const item = new Avatar(context);
  // app — это id дива в корне DOM
  render(".sample", item);
});
