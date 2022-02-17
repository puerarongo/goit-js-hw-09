const bodyEl = document.querySelector("body");
const startEl = document.querySelector("button[data-start]");
const stopEl = document.querySelector("button[data-stop]");
let intervalId = null;


stopEl.setAttribute("disabled", "");

// ! function
const colorize = () => {
    startEl.setAttribute("disabled", "");
    stopEl.removeAttribute("disabled");

    condition = true;
    console.log("!");
    intervalId = setInterval(() => {
        bodyEl.style.backgroundColor = getRandomHexColor()
    }, 1000);
};


const stopColorize = () => {
    stopEl.setAttribute("disabled", "");
    startEl.removeAttribute("disabled");
    clearInterval(intervalId);
}
// !

// todo random function
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// todo   

startEl.addEventListener("click", colorize);
stopEl.addEventListener("click", stopColorize);