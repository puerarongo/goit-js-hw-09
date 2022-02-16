import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Report } from 'notiflix/build/notiflix-report-aio';

// *
const inputFlatpickrEl = document.querySelector("#datetime-picker");
const buttonEl = document.querySelector(`button[type="button"]`);
let timeIdNow = null;
let onCloseTime = null;
let intervalId = null;
// * //


// * span
const daysEl = document.querySelector("span[data-days]");
const hoursEl = document.querySelector("span[data-hours]");
const minutesEl = document.querySelector("span[data-minutes]");
const secondsEl = document.querySelector("span[data-seconds]");
// * //


// ? flatpickr option
const options = {
  enableTime: true,
  time_24hr: true,
  //defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    onCloseTime = selectedDates[0].getTime();
    timeIdNow = new Date().getTime();
    initTime();
  }
};
// ? //

buttonEl.setAttribute("disabled", "");
const calendarFlatpickrEl = flatpickr(inputFlatpickrEl, options);


// todo function
const initTime = () => {
  if (onCloseTime <= timeIdNow) {
    return Report.warning(
      "Warning!",
      "Please choose a date in the future!",
      "OK"
    );
  };
  
  buttonEl.removeAttribute("disabled");
};

const activeButton = () => {
  intervalId = setInterval(residualCount, 1000);
};

const residualCount = () => {
  timeIdNow = new Date().getTime();
  let residual = onCloseTime - timeIdNow;
  convertMs(residual);
};

const addLeadingZero = (value) => {
  let days = String(value.days).padStart(2, "0");
  let hours = String(value.hours).padStart(2, "0");
  let minutes = String(value.minutes).padStart(2, "0");
  let seconds = String(value.seconds).padStart(2, "0");
  visualCounter({days, hours, minutes, seconds});
};

const visualCounter = (value) => {
  daysEl.textContent = value.days;
  hoursEl.textContent = value.hours;
  minutesEl.textContent = value.minutes;
  secondsEl.textContent = value.seconds;
};

// todo

// ! inudu`s function
const convertMs = (ms) => {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  addLeadingZero({ days, hours, minutes, seconds });
}
// ! //

buttonEl.addEventListener("click", activeButton);