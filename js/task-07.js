const inputEl = document.getElementById("font-size-control");
inputEl.addEventListener(`input`, onInputChange);

const spanEl = document.getElementById("text");



function onInputChange(event) {
    spanEl.style.fontSize = event.currentTarget.value + "px";

}