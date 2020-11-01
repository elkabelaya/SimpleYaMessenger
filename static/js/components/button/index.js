document.addEventListener("DOMContentLoaded", () => {
    const context = {
        logo: "../../../images/empty_logo.jpg",
        name: "Андрей",
        message: "Изображение",
        time: "10:49",
        alert: "2"
    };
    function render(query, block) {
        const root = document.querySelector(query);
        root.appendChild(block.element);
        return root;
    }
    const chatItem = new ChatItem(context);
    // app — это id дива в корне DOM
    render(".sample", chatItem);
});
export {};
//# sourceMappingURL=index.js.map