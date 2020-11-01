"use strict";
document.addEventListener("DOMContentLoaded", () => {
    let form;
    for (const i in Object.values(document.forms)) {
        form = document.forms[i];
        form.addEventListener("submit", printData);
    }
});
function printData(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const result = {};
    for (const key of formData.keys()) {
        result[key] = formData.get(key);
    }
    console.log(result);
}
