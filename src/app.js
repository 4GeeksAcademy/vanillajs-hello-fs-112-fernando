import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

import { getRandomIndex } from "./utils";

const who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
const action = ['ate', 'peed', 'crushed', 'broke'];
const what = ['my homework', 'my phone', 'the car'];
const when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

const pExcusa = document.querySelector('#excusa');
const container = document.querySelector('.container');

// Crear botón y añadirlo al DOM con el evento
let button = document.createElement('button');
button.innerText = "Actualizar";
button.addEventListener("click", () => {
  pExcusa.innerHTML = generateExcusa()
})
container.appendChild(button)


window.onload = function () {
  if (!pExcusa) return
  pExcusa.innerHTML = generateExcusa();
};



/**
 * Genera una excusa utilizando los arrays definidos anteriormente who, action, what, when 
 * @returns string Excusa generada
 */
function generateExcusa() {
  return `${who.at(getRandomIndex(who))} ${action.at(getRandomIndex(action))} ${what.at(getRandomIndex(what))} ${when.at(getRandomIndex(when))}`;
}