//your JS code here. If required.
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

  if (!message) {
    outputDiv.textContent = "Please enter a message!";
    return;
  }
  if (isNaN(delay) || delay < 0) {
    outputDiv.textContent = "Please enter a valid delay in milliseconds!";
    return;
  }

  outputDiv.textContent = "Waiting...";
  await wait(delay); 
  outputDiv.textContent = message; 
}

btn.addEventListener("click", showMessage);
