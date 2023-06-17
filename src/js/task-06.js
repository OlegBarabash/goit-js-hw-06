const textInput = document.querySelector('#validation-input')
const dataLength = textInput.getAttribute('data-length')

textInput.addEventListener('blur', checkSymbols)

function checkSymbols() {
    const symbolsNum = Number(textInput.value.length)
    if (symbolsNum == dataLength) {
        textInput.classList.add('valid')
        textInput.classList.remove('invalid')
    } else if(symbolsNum){
         textInput.classList.add('invalid')
    } else {
        textInput.classList.remove('invalid')
        textInput.classList.remove('valid')
    }
}