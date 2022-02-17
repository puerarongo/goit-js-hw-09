
const formEl = document.querySelector(`.form`);
let DELAY = null;
let STEP = null;
let AMOUNT = null;



// todo function
const submitForm = (event) => {
  event.preventDefault()
  
  DELAY = Number(event.target.elements[0].value)
  STEP = Number(event.target.elements[1].value)
  AMOUNT = Number(event.target.elements[2].value)

  console.log("submitForm")

  for (let i = 1; i <= AMOUNT; i +=1) {
    createPromise(i, DELAY).then(value => console.log(value)).catch(error => console.log(error));
    DELAY += STEP;
  };
}
// todo


function createPromise(position, delay) {
  console.log("!")

  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay} ms`)
      }
      else {
        reject(`❌ Rejected promise ${position} in ${delay} ms`)
      }
      console.log(delay)
    }, delay)
  });
  
}




// ? способ как передать аргумнт колбеку слушателя не теряя event
//el.addEventListener("click", (event)=> myFunc(event,arg));

formEl.addEventListener("submit", submitForm);