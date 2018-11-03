// The learning objective of this exercise is writing event listeners to handle button clicks, and modifying the classList of DOM elements when those events are broadcast by the browser.
// 1. Add the correct string as the first argument to addEventListener()
// 2. Write a function named flightHandlerFunction that will remove the disabled class on the corresponding <section id="flight"> (section, not button) and replace it with a class of enabled.

let flight = document.getElementById("flight")
let mindReading = document.getElementById("mindreading")
let xray = document.getElementById("xray")
let power = document.querySelectorAll(".power");

let powerFunction = () => {
  for (var i = 0; i < power.length; i++) {
    power[i].classList.remove("disabled")
    power[i].classList.add("enabled")
  }
}

let deactiveFunction = () => {
  for (var i = 0; i < power.length; i++) {
    power[i].classList.remove("enabled")
    power[i].classList.add("disabled")
  }
}

let flightHandlerFunction = () => {
  flight.classList.toggle("disabled")
  flight.classList.toggle("enabled")
}
let mindReadingHandlerFunction = () => {
  mindReading.classList.toggle("disabled")
  mindReading.classList.toggle("enabled")
}
let xrayHandlerFunction = () => {
  xray.classList.toggle("disabled")
  xray.classList.toggle("enabled")
}

document.querySelector("#activate-flight").addEventListener("click", flightHandlerFunction)
document.querySelector("#activate-mindreading").addEventListener("click", mindReadingHandlerFunction)
document.querySelector("#activate-xray").addEventListener("click", xrayHandlerFunction)
document.querySelector("#activate-all").addEventListener("click", powerFunction)
document.querySelector("#deactivate-all").addEventListener("click", deactiveFunction)