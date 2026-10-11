// Находим элементы
const btn = document.querySelector("#mobile-burger");
const mobileBtnImg = document.querySelector("#mobile-burger-img");
const mobileNav = document.querySelector("#mobile-nav");
const header = document.querySelector("#header");

// Добавляем прослушку по клику
btn.addEventListener("click", function () {
  btn.classList.toggle("open");
  mobileNav.classList.toggle("open");
  header.classList.toggle("header__white-bg");
  document.body.classList.toggle("no-scroll");




  if (btn.classList.contains("open")) {
    mobileBtnImg.src = "../img/burger-close.svg";
  } else {
    mobileBtnImg.src = "../img/burger-btn.svg";
  }
});
