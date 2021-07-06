"use strict";

const button = document.querySelector(".js-button");
const inputNumber = document.querySelector(".js-inputNumber");
const counter = document.querySelector(".js-try");
const text = document.querySelector(".js-text");
const randomNumber = getRandomNumber(100);
let cont = 0;

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

function checkNum() {
  const num = parseInt(inputNumber.value);
  console.log("Input number: " + num);
    
  if (num < 1 || num > 100) {
    text.innerHTML = "El número debe estar entre 1 y 100";
  } else if (num < randomNumber) {
    text.innerHTML = "Pista: Demasiado bajo";
  } else if (num > randomNumber) {
    text.innerHTML = "Pista: Demasiado alto";
  } else if (num === randomNumber) {
    text.innerHTML = "Has ganado campeona!!!";
  }else {
    text.innerHTML = "El número debe estar entre 1 y 100";
  }
}

function increaseCounter() {
  cont += 1;
  counter.value = `Número de intentos: ${cont}`;
}

function handleClickButton() {
  //comprobar numero
  checkNum();
  //con cada click aumenta el contador
  increaseCounter();
}

console.log("Random number: " + randomNumber);
button.addEventListener("click", handleClickButton);
