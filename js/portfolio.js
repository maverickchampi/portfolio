const burger = document.getElementById("burger");
const menu = document.getElementById("menu");
const ipad = window.matchMedia("(max-width: 480px)");
runBurgerMenu(ipad.matches);
ipad.addListener((event) => {
  runBurgerMenu(event.matches);
});

function hideShow() {
  if (menu.classList.contains("show-menu")) {
    menu.classList.remove("show-menu");
  } else {
    menu.classList.add("show-menu");
  }
}
function runBurgerMenu(yes) {
  if (yes) {
    burger.addEventListener("click", hideShow);
  } else {
    burger.removeEventListener("click", hideShow);
  }
}
