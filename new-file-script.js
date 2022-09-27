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

    if(inputFile.files[0].name.slice(-4) === ".pdf"){
      const formData = new FormData();
      formData.append("pdfFile", inputFile.files[0]);
      
      console.log(inputFile.files[0].name);
      console.log('pdf');
    }

    if(inputFile.files[0].name.slice(-4) === ".txt"){
      console.log(inputFile.files[0].name);
      console.log('txt');
    }
    // CHECK FOR FILE TYPE
    //
    // CONVERT PDF OR TXT TO TEXT 
    //
    // IF translate is checked, use translation api to display the second text
    //
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
