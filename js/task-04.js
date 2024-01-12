var counterDisplay = document.getElementById('value');
let counterValue = 0;

const decrementButton = document.querySelector('button[data-action="decrement"]');
const incrementButton = document.querySelector('button[data-action="increment"]');

decrementButton.addEventListener('click', triggerDecrementCounter);
incrementButton.addEventListener('click', triggerIncrementCounter);

function triggerDecrementCounter () {
    counterValue--;
    updateCounter();
}

function triggerIncrementCounter () {
    counterValue++;
    updateCounter();
}

function updateCounter () {
    counterDisplay.textContent = counterValue;
}