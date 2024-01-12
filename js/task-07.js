const fontSizeControl = document.querySelector('#font-size-control');
const textDisplay = document.querySelector('#text');

fontSizeControl.addEventListener('input', triggerInputChange);

function triggerInputChange({ target: { value } }) {
  textDisplay.style.fontSize = `${value}px`;
}