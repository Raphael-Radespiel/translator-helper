const textNameHeader = document.querySelector("#text-name");
const originalTextArea = document.querySelector("#original-text");
const translationTextArea = document.querySelector("#translation-text");

let textKey = sessionStorage.getItem("currentText");
textNameHeader.textContent = textKey;

let storageObj = JSON.parse(localStorage.getItem(textKey));

originalTextArea.rows = 40;
originalTextArea.cols = 50;
translationTextArea.rows = 40;
translationTextArea.cols = 50;

originalTextArea.value = storageObj.original;
