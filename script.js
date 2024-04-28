const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const img = document.querySelector(".img");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const secondQuestion = document.querySelectorAll(".question")[1];
const thirdQuestion = document.querySelectorAll(".question")[2];

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Would you go out with me?";
  secondQuestion.innerHTML = "Would you be more sweeter?"
  thirdQuestion.innerHTML = "Bakit ang sungit mo sa akin?"
  img.src = "https://s1.stickers.cloud/packs/19554a81-5136-4c2d-bafd-26a214c9d746/png/3013868b-e86c-442d-abf4-bb5cffe6ae7a.png";
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});

