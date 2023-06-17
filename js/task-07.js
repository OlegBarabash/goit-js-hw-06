const inputSize = document.querySelector('#font-size-control')
const text = document.querySelector('#text')

inputSize.addEventListener('input', changFontSize)

function changFontSize(event) {
    text.style.fontSize = event.target.value + 'px'
}