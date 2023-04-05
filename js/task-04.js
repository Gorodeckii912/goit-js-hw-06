let counterValue = 0;

const buttonRem = document.querySelector('button[data-action="decrement"]');
const buttonAdd = document.querySelector('button[data-action="increment"]');
const valueAll = document.querySelector('#value');

buttonAdd.addEventListener(`click`, onAddNumber);
buttonRem.addEventListener(`click`, onRemoveNumber);

function onAddNumber() {
    counterValue += 1;
    valueAll.textContent = counterValue;
}

function onRemoveNumber() {
    counterValue -= 1;
    valueAll.textContent = counterValue;
}

