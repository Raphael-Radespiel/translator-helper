let inputFile = document.querySelector("#files");
let translateSelectDiv = document.querySelector("#select-div");
let translateCheckbox = document.querySelector("#translate");
let translateFromSelect = document.querySelector("#lang-from");
let translateToSelect = document.querySelector("#lang-to");
let createProjectButton = document.querySelector("#create-button");

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

  createProjectButton.addEventListener("click", () => {
    // Check if there is a file uploaded
    if(inputFile.files[0] === undefined){
      return;
    }

    // Check if pdf
    if(inputFile.files[0].name.slice(-4) === ".pdf"){
      const data = inputFile.files[0];
      const options = {
        method: "POST",
        header: {
          'Content-Type': 'application/pdf'
        }, 
        body: data
      }

      fetch('http://localhost:3000/pdf', options);

      console.log(inputFile.files[0].name);
      console.log('pdf');
    }

    // Check if txt
    if(inputFile.files[0].name.slice(-4) === ".txt"){
      const data = inputFile.files[0];
      const options = {
        method: "POST",
        header: {
          'Content-Type': 'text/plain'
        }, 
        body: data
      }
      console.log(inputFile.files[0].name);
      console.log('txt');
      console.log(inputFile);
    }

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
