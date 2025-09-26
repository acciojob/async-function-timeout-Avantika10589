// script.js

const btn = document.getElementById("btn");
const textInput = document.getElementById("text");
const delayInput = document.getElementById("delay");
const outputDiv = document.getElementById("output");

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function showMessage() {
  const message = textInput.value.trim();
  const delay = Number(delayInput.value);

  if (!message) return;
  if (isNaN(delay) || delay < 0) return;

  outputDiv.textContent = ""; 
  await wait(delay);
  outputDiv.textContent = message;
}

btn.addEventListener("click", showMessage);
