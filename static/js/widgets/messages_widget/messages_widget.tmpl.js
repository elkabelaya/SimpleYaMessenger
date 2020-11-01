export const template = `
          <header class="widget-chat-chat__header">
            <img src="../../../images/empty_logo.jpg" alt="avatar">

            <div class="widget-chat-list__about">
              <h1 class="widget-chat-list__item-name">Вадим</h1>
              <div class="widget-chat-list__item-message">Был 5 минут назад</div>
            </div>

          </header>
          <main class="widget-chat-chat__main">
            <div class="widget-chat-chat__history">
              <div class="widget-chat-list__items">
              </div>


          </div>

          <form method="POST" class="widget-chat__send">
            <input type="text" name="message" id="message" placeholder="Сообщение">
            <button id="close-image" type="submit"><img src="../../../images/chat_send_button.png"></button>


          </form>
        </main>


`;
