let elements = document.querySelectorAll(".elements");
let countElement = 0;
setInterval(function () {
  let currentElement = document.querySelector(".current");
  currentElement.classList.remove("current");
  countElement = (countElement + 1) % elements.length;
  elements[countElement].classList.add("current");
}, 2000);
