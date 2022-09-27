const mainElement = document.querySelector("main");

const newFileButton = document.querySelector("#new-file-button");
const openFileButton = document.querySelector("#open-file-button");

function initButtonEvents(){
  newFileButton.addEventListener("click", () => {
    removeAllChildNodes(mainElement);       
    mainElement.append(getUploadContainer());
  });

  openFileButton.addEventListener("click", () => {

  });
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function getUploadContainer(){
  /* 
  <section>
    <h2>Upload a pdf or txt file</h2>
    <div>
      <label for="files" class="btn">Select File</label>
      <input id="files" style="visibility:hidden;" type="file" accept=".pdf, .txt">
    </div>
    <div>
      <input type="checkbox" id="translate" name="translate">
      <label for="translate"> Do you wish to use a translator to help you with the text?</label>
      <label for="lang-from">Translate from:</label>
      <select id="lang-from" name="lang-from">
        <option value="en">EN</option>
      </select>
      <label for="lang-from">Translate to: </label>
      <select id="lang-from" name="lang-from">
        <option value="pt">PT</option>
      </select>
    </div>
    <button>Create translation project</button>
  </section>
  */

  let sectionElem = document.createElement("section");

    let headerElem = document.createElement("h2");

    let fileUploadDiv = document.createElement("div");
      let fileLabel = document.createElement("label");
      let fileInput = document.createElement("input");

    let fileTranslateDiv = document.createElement("div");
      let checkboxInput = document.createElement("input");
      let checkboxLabel = document.createElement("label");
      let translateFromLabel = document.createElement("label");
      let translateFromSelect = document.createElement("select");
        let translateFromOption = document.createElement("option");
      let translateToLabel = document.createElement("label");
      let translateToSelect = document.createElement("select");
        let translateToOption = document.createElement("option");

    let submitButton = document.createElement("button");

  // Header
  headerElem.textContent = "Upload a pdf or txt file";

  // File input
  fileLabel.textContent = "Select File";
  fileLabel.setAttribute("for", "files");
  fileLabel.classList.add("btn");
  fileInput.setAttribute("id", "files");
  fileInput.setAttribute("type", "file");
  fileInput.setAttribute("accept", ".pdf, .txt");
  fileInput.style.visibility = "hidden";

  fileUploadDiv.append(fileLabel, fileInput);

  // File translation
  checkboxInput.setAttribute("type", "checkbox");
  checkboxInput.setAttribute("id", "translate");
  checkboxInput.setAttribute("name", "translate");
  checkboxLabel.setAttribute("for", "translate");
  checkboxLabel.textContent = "Do you wish to use a translator to help you with the text?";

  translateFromLabel.setAttribute("for", "lang-from");
  translateFromLabel.textContent = "Translate from:";
  translateFromSelect.setAttribute("id", "lang-from");
  translateFromSelect.setAttribute("name", "lang-from");
  translateToLabel.setAttribute("for", "lang-to");
  translateToLabel.textContent = "Translate to:";
  translateToSelect.setAttribute("id", "lang-to");
  translateToSelect.setAttribute("name", "lang-to");

  translateFromOption.textContent = "en";
  translateFromOption.setAttribute("value", "en");

  translateToOption.textContent = "pt";
  translateToOption.setAttribute("value", "pt");

  translateFromSelect.append(translateFromOption);
  translateToSelect.append(translateToOption);

  fileTranslateDiv.append(checkboxInput, checkboxLabel, translateFromLabel, translateFromSelect, translateToLabel, translateToSelect);

  // Submit button
  submitButton.textContent = "Create translation project";

  // Join everything 
  sectionElem.append(headerElem, fileUploadDiv, fileTranslateDiv, submitButton);

  return sectionElem;
}

function getLanguageOptionsArray(){

}

initButtonEvents();
