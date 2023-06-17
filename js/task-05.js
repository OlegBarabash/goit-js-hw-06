const inputText = document.querySelector('#name-input')
const outputText = document.querySelector('#name-output')

inputText.addEventListener("input", typeOut);

function typeOut(event) {
    let str = event.currentTarget.value.trim()
    str ? outputText.textContent = str : outputText.textContent = 'Anonymous'
}