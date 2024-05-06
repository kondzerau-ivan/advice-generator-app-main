"use strict";

const button = document.querySelector('.generator__button');
const adviceId = document.querySelector('.generator__id');
const adviceText = document.querySelector('.blockquote__text');

button.addEventListener('click', handleClick);

function handleClick() {
  getAdvice().then(value => {
    adviceId.textContent = value.slip.id;
    adviceText.textContent = value.slip.advice;
  });

}

async function getAdvice() {
  try {
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();
    return data;
  } catch (error) {
    alertError(error);
  }
}

function alertError(error) {
  alert(error.message);
}

