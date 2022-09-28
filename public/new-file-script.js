let inputFile = document.querySelector("#files");
let createProjectButton = document.querySelector("#create-button");

function Option(method, data){
  this.method = method;
  this.body = data;
}

// MAKE THIS CREATE PROJECT BUTTON FUNCTION ASYNC SO THAT WE CAN WAIT UNTIL ORIGINAL TEXT HAS BEEN ASSIGNED
function initButtonEvents(){
  createProjectButton.addEventListener("click", async () => {
    // Check if there is a file uploaded
    if(inputFile.files[0] === undefined){
      return;
    }

    let originalText;
    let translatedText = '';

    // Check if pdf
    if(inputFile.files[0].name.slice(-4) === ".pdf"){
      const data = new FormData(); 
      data.append('pdfFile', inputFile.files[0]);
        
      const options = new Option("POST", data); 

      let response = await fetch('http://localhost:3000/pdf', options)
      let extractedText = await response.text();
      originalText = extractedText;
    }

    // Check if txt
    if(inputFile.files[0].name.slice(-4) === ".txt"){
      const data = new FormData(); 
      data.append('textFile', inputFile.files[0]);

      const options = new Option("POST", data); 

      let response = await fetch('http://localhost:3000/txt', options)
      let extractedText = await response.text();
      originalText = extractedText;
    }

    // ADD TEXTS TO LOCALSTORAGE
    let textName = inputFile.files[0].name.slice(0, -4); // remove .txt or .pdf from title
    let parsedTextName = '';

    for(let char of textName){ 
      if(char === "_" || char === "-"){
        parsedTextName = parsedTextName.concat(' ');
      }
      else{
        parsedTextName = parsedTextName.concat(char);
      }
    }

    localStorage.setItem(parsedTextName, JSON.stringify({"original": originalText, "translation": translatedText}));

    // MAKE NEW TEXT THE CURRENT ONE TO BE DISPLAYED IN TEXT EDITING.html
    sessionStorage.setItem("currentText", parsedTextName);

    // Go to new page
    window.location = "/edit-text.html";
  });

}

initButtonEvents();
