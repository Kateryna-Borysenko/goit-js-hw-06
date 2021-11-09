function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  textColor: document.querySelector(".color"),
  btn: document.querySelector("button"),
  body: document.querySelector("body"),
};

refs.btn.addEventListener("click", () => {
  const color = getRandomHexColor();
  refs.body.style.backgroundColor = color;
  refs.textColor.textContent = color;
});