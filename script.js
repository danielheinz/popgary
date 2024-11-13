// 宣告變數
const container = document.querySelector(".container");

// 函式
function afterClick() {
  const count = document.querySelector(".count");
  const audio = document.querySelector("audio");

  count.textContent = parseInt(count.textContent) + 1;
  audio.play();

  document.querySelector(".before").classList.add("closed");
  document.querySelector(".after").classList.remove("closed");
}

function beforeClick() {
  document.querySelector(".after").classList.add("closed");
  document.querySelector(".before").classList.remove("closed");
}

// 主程式
container.addEventListener("click", function (event) {
  afterClick();
  setTimeout(beforeClick, 300);
});