const inputNum = document.querySelector('input')
const createBtn = document.querySelector('button[data-create]')
const destroyBtn = document.querySelector('button[data-destroy]')
const boxes = document.querySelector('#boxes')

createBtn.addEventListener('click', onClickCreate)
destroyBtn.addEventListener('click', destroyBoxes)

function onClickCreate() {
  createBoxes(inputNum.value)
}

function createBoxes(amount) {
  let boxSize = 30
  for (let i = 1; i <= amount; i += 1) {
    boxes.insertAdjacentHTML('afterbegin', `<div style="width: ${boxSize}px; height: ${boxSize}px; background-color: ${getRandomHexColor()};"></div>`)
    boxSize += 10
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function destroyBoxes() {
  boxes.innerHTML = " "
}

