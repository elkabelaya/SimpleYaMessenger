import ChatListWidget from "../../js/widgets/chat_list_widget/chat_list_widget.js"

document.addEventListener("DOMContentLoaded", ()=>{
  let data = [];
  for (let i = 0; i<30; i++){
    data.push({
        logo:"../../../images/empty_logo.jpg",
        name:"Андрей",
        message:"Изображение",
        time:"10:49",
        alert:"2"
      });
}

  function render(query, block) {

    const root = document.querySelector(query);
    root.appendChild(block.element);
    return root;
  }

  const item = new ChatListWidget(data);
  // app — это id дива в корне DOM
  render(".sample", item);
});
