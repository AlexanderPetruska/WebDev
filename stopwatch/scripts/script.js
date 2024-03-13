const startButton = document.querySelector(".start-btn");
const stopButton = document.querySelector(".stop-btn");
const resetButton = document.querySelector(".reset-btn");
const time = document.querySelector(".time");

let secondElapsed = 0;
let interval = null;

function padStart(value) {
  return String(value).padStart(2, "0");
}

function setTime() {
  const minutes = Math.floor(secondElapsed / 60);
  const second = secondElapsed % 60;
  time.innerHTML = `${padStart(minutes)}:${padStart(second)}`;
}

function timer() {
  secondElapsed++;
  setTime();
}

function startClock() {
  if (interval) stopClock();
  interval = setInterval(timer, 1000);
}

function stopClock() {
  clearInterval(interval);
}

function resetClock() {
  stopClock();
  secondElapsed = 0;
  setTime();
}

startButton.addEventListener("click", () => {
  startClock();
});

stopButton.addEventListener("click", () => {
  stopClock();
});

resetButton.addEventListener("click", () => {
  resetClock();
});
