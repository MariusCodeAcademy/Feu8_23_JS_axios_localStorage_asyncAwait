'use strict';
console.log('localStorage.js file was loaded');

const num1El = document.getElementById('num1');
const btn1El = document.getElementById('btn1');
const btn2El = document.getElementById('btn2');

let sk1Storage = localStorage.getItem('sk1');
if (sk1Storage === null) {
  sk1Storage = 0;
}
console.log('sk1Storage ===', sk1Storage);
let numVal = Number(sk1Storage);
console.log('typeof numVal ===', typeof numVal);
num1El.textContent = numVal;
btn1El.addEventListener('click', () => {
  //
  numVal = numVal + 5;
  console.count('numVal ===', numVal);
  num1El.textContent = numVal;
  // issaugoti local storage
  localStorage.setItem('sk1', numVal);
});

btn2El.addEventListener('click', () => {
  numVal -= 5;
  num1El.textContent = numVal;
  // issaugoti local storage
  localStorage.setItem('sk1', numVal);
});
