const decrementButtonElement = document.getElementById('decrement-button')
const countElement = document.getElementById('count')
const resetButtonElement = document.getElementById('reset-button')

// Using DOM event handler - preferred method
// we only pass the name of the event as a string, without 'on' in front
const resetEventListener = () => {
    countElement.textContent = 0;
};

resetButtonElement.addEventListener('click', resetEventListener)

// Using DOM element properties
decrementButtonElement.onclick = function () {
    countElement.textContent = Number(countElement.textContent) - 1;
}

// With HTML Atributes
function onIncrement() {
   countElement.textContent = Number(countElement.textContent) + 1;
}

setTimeout(() => {
    resetButtonElement.removeEventListener('click', resetEventListener)
}, 10000);