const btn = document.querySelector("#btn");
const colouredContainer = document.querySelector(".colored-container");
const closeIcon = document.querySelector(".fa-xmark");

const colouredBoxes = document.querySelectorAll(".boxes");
let delay = 0;
let doubleClick = false;

const menuBtn = () => {
  for (let i = 0; i <= colouredBoxes.length; i++) {
    if (doubleClick === false) {
      setTimeout(() => {
        colouredBoxes[i].style.transform = "translate(0%)";
        doubleClick = true;
      }, delay);
      delay += 200;
    } else {
      setTimeout(() => {
        colouredBoxes[i].style.transform = "";
        doubleClick = false;
      }, delay);
      delay -= 200;
    }
  }
};

btn.addEventListener("click", menuBtn);
closeIcon.addEventListener("click", menuBtn);
