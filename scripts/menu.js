document.addEventListener("DOMContentLoaded", function () {
    const url = window.location.href;
    const menu = document.querySelectorAll('.genres a');

    for (let i = 0; i < menu.length; i++) {
        if (menu[i].href === url) {
            menu[i].parentNode.classList.add('active');
            break;
        }
    }
});