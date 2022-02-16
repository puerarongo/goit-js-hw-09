const bodyEl = document.querySelector("body");
const startEl = document.querySelector("button[data-start]");
const stopEl = document.querySelector("button[data-stop]");
let condition = false;
let intervalId = null;

// ! function
const colorize = () => {
    if (condition) {
        return
    };

    condition = true;
    console.log("!");
    intervalId = setInterval(() => {
        bodyEl.style.backgroundColor = getRandomHexColor()
    }, 1000);
};


const stopColorize = () => {
    condition = false;
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