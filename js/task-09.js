const changeColorBtn = document.querySelector('button.change-color');
const body = document.body;
const colorValue = document.querySelector('.color');

changeColorBtn.addEventListener('click', triggerChangeColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function triggerChangeColor() {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  colorValue.textContent = color;
}