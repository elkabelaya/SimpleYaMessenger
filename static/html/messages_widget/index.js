import ChatListWidget from "../../js/widgets/messages_widget/messages_widget.js"

document.addEventListener("DOMContentLoaded", ()=>{
  let data = [];
  for (let i = 0; i<30; i++){
    data.push({
      type: Math.round(Math.random()),
      value: "Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой. Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.",
      time:"10:20",
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
