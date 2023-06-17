let counterValue = 0;

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const num = document.querySelector('#value')

decrementBtn.addEventListener("click", () => {
  num.innerHTML--
});

incrementBtn.addEventListener("click", () => {
  num.innerHTML++
});