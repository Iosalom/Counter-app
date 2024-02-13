'use strict';

const plusBtn = document.getElementById('increment-btn');
const minusBtn = document.getElementById('decrement-btn');
const baseValue = document.getElementById('initial-value');
const resetNum = document.getElementById('nulify-value-btn');
const restoreValueBtn = document.getElementById('restore-value-btn');

const doublePlusBtn = document.getElementById('double-increm-btn');
const triplePlusBtn = document.getElementById('triple-increm-btn');
const fiveFoldPlusBtn = document.getElementById('five-fold-increm-btn');
const doubleMinusBtn = document.getElementById('double-decrem-btn');
const tripleMinusBtn = document.getElementById('triple-decrem-btn');
const fiveFoldMinusBtn = document.getElementById('five-fold-decrem-btn');

let count = 0;

function counerColor() {
  if (count > 0) {
    baseValue.className = 'above-zero';
  } else if (count < 0) {
    baseValue.className = 'below-zero';
  } else if (count == 0) {
    baseValue.className = 'at-zero';
  }
  // return count;
}

plusBtn.addEventListener('click', function () {
  count++;
  baseValue.textContent = count;
  counerColor();
});
doublePlusBtn.addEventListener('click', function () {
  count += 2;
  baseValue.textContent = count;
  counerColor();
});
triplePlusBtn.addEventListener('click', function () {
  count += 3;
  baseValue.textContent = count;
  counerColor();
});
fiveFoldPlusBtn.addEventListener('click', function () {
  count += 5;
  baseValue.textContent = count;
  counerColor();
});
minusBtn.addEventListener('click', function () {
  count--;
  baseValue.textContent = count;
  counerColor();
});
doubleMinusBtn.addEventListener('click', function () {
  count -= 2;
  baseValue.textContent = count;
  counerColor();
});
tripleMinusBtn.addEventListener('click', function () {
  count -= 3;
  baseValue.textContent = count;
  counerColor();
});
fiveFoldMinusBtn.addEventListener('click', function () {
  count -= 5;
  baseValue.textContent = count;
  counerColor();
});
resetNum.addEventListener('click', function () {
  count = 0;
  baseValue.textContent = count;
  counerColor();
});
