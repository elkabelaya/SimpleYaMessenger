export const template:string =  `
        <a class="widget-chat-list__profile" href="../../html/user_settings"> Профиль &gt; </a>

        <form method="POST" class="widget-chat-list__search">
          <input id="search" name="search" class="widget-chat-list__search-input" type="text" placeholder=" ">
          <label for="search"><span class="widget-chat-list_search-placeholder"> </span> Поиск</label>
        </form>


        <ul class="widget-chat-list__items"></ul>`;
