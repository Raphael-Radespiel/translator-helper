let inputFile = document.querySelector("#files");
let translateSelectDiv = document.querySelector("#select-div");
let translateCheckbox = document.querySelector("#translate");
let translateFromSelect = document.querySelector("#lang-from");
let translateToSelect = document.querySelector("#lang-to");
let createProjectButton = document.querySelector("#create-button");

// MAKE THIS CREATE PROJECT BUTTON FUNCTION ASYNC SO THAT WE CAN WAIT UNTIL ORIGINAL TEXT HAS BEEN ASSIGNED
function initButtonEvents(){
  translateSelectDiv.style.display = "none";

  translateCheckbox.addEventListener("click", () => {
    if(translateCheckbox.checked){ 
      translateSelectDiv.style.display = "block";
    }
    else{
      translateSelectDiv.style.display = "none";
    }
  });

  createProjectButton.addEventListener("click", async () => {
    let originalText;

    // Check if there is a file uploaded
    if(inputFile.files[0] === undefined){
      return;
    }

    // Check if pdf
    if(inputFile.files[0].name.slice(-4) === ".pdf"){
      const data = new FormData(); 
      data.append('pdfFile', inputFile.files[0]);
        
      const options = {
        method: "POST",
        body: data 
      }

      let response = await fetch('http://localhost:3000/pdf', options)
      let extractedText = await response.text();
      originalText = extractedText;
    }

    // Check if txt
    if(inputFile.files[0].name.slice(-4) === ".txt"){
      const data = new FormData(); 
      data.append('textFile', inputFile.files[0]);

      const options = {
        method: "POST",
        body: data
      }

      let response = await fetch('http://localhost:3000/txt', options)
      let extractedText = await response.text();
      originalText = extractedText;
    }

    console.log(originalText);

    // Check if text will be translated automatically 
    if(translateCheckbox.checked){
      console.log(translateFromSelect.value + " " + translateToSelect.value);
    }
  });

}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

initButtonEvents();
