const inputNumEl = document.querySelector('#controls>input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxesList = document.querySelector('#boxes');

const createBoxes = amount => {
  const boxesToAdd = [];

  const existingBoxesCount = boxesList.childElementCount;

  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement('div');
    div.style.width = `${30 + 10 * (existingBoxesCount + i)}px`;
    div.style.height = `${30 + 10 * (existingBoxesCount + i)}px`;
    div.style.backgroundColor = getRandomHexColor();

    boxesToAdd.push(div);
  }

  return boxesToAdd;
};

const destroyBoxes = () => {
  boxesList.innerHTML = '';
  inputNumEl.value = '';
};

createBtn.addEventListener('click', () => {
  const boxesToAdd = createBoxes(inputNumEl.value);
  boxesList.append(...boxesToAdd);
});

destroyBtn.addEventListener('click', destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}