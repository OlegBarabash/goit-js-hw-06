const body = document.querySelector('body')
const textColor = document.querySelector('.color')
const colorBtn = document.querySelector('button')

colorBtn.addEventListener('click', onClick)

function onClick() {
  const newColor = getRandomHexColor()
  textColor.textContent = newColor
  body.style.backgroundColor = newColor
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
