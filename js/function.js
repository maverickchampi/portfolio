const menu = document.querySelector(".header-container-menu");
const burgerbutt = document.querySelector(".burger-button");
const burgerButton = document.querySelector("#burger-menu");
const ipad = window.matchMedia("(max-width: 767px)");
runBurgerMenu(ipad.matches);
ipad.addListener((event) => {
    runBurgerMenu(event.matches);
});

document.querySelector(".link-1").addEventListener("click", hideShow);
document.querySelector(".link-2").addEventListener("click", hideShow);
document.querySelector(".link-3").addEventListener("click", hideShow);
document.querySelector(".link-4").addEventListener("click", hideShow);
burgerButton.addEventListener("click", hideShow);

function hideShow() {
    if (menu.classList.contains("is-active")) {
        menu.classList.remove("is-active");
        burgerbutt.classList.remove("is-active");
    } else {
        menu.classList.add("is-active");
        burgerbutt.classList.add("is-active");
    }
}
function runBurgerMenu(yes) {
    if (yes) {
        burgerButton.addEventListener("click", hideShow);
    } else {
        burgerButton.removeEventListener("click", hideShow);
    }
}