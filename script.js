const mainElement = document.querySelector("main");

let newFileButton = document.querySelector("#new-file-button");
let openFileButton = document.querySelector("#open-file-button");

let translateSelectDiv;
let inputFile;
let translateCheckbox;
let translateFromSelect;
let translateToSelect;
let createProjectButton;

function initButtonEvents(){
  newFileButton.addEventListener("click", () => {
    // Clear main content
    removeAllChildNodes(mainElement);       

    // Populate with new html
    mainElement.append(getUploadContainer());

    // Get the DOM objects
    inputFile = document.querySelector("#files");
    translateSelectDiv = document.querySelector("#select-div");
    translateCheckbox = document.querySelector("#translate");
    translateFromSelect = document.querySelector("#lang-from");
    translateToSelect = document.querySelector("#lang-to");
    createProjectButton = document.querySelector("#create-button");

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
  return createElementFromHTML(`
  <section>
    <h2>Upload a pdf or txt file</h2>
    <div>
      <label for="files" class="btn">Select File</label>
      <input id="files" style="visibility:hidden;" type="file" accept=".pdf, .txt">
    </div>
    <div>
      <input type="checkbox" id="translate" name="translate">
      <label for="translate">Use translator assistance?</label>
      <div id="select-div">
        <label for="lang-from">Translate from:</label>
        <select id="lang-from" name="lang-from">
          <option value="af">Afrikaans</option>
          <option value="ar">Arabic</option>
          <option value="az">Azeri (Latin)</option>
          <option value="be">Belarusian</option>
          <option value="bg">Bulgarian</option>
          <option value="ca">Catalan</option>
          <option value="cs">Czech</option>
          <option value="cy">Welsh</option>
          <option value="da">Danish</option>
          <option value="de">German</option>
          <option value="dv">Divehi</option>
          <option value="el">Greek</option>
          <option value="en">English</option>
          <option value="eo">Esperanto</option>
          <option value="es">Spanish</option>
          <option value="et">Estonian</option>
          <option value="eu">Basque</option>
          <option value="fa">Farsi</option>
          <option value="fi">Finnish</option>
          <option value="fo">Faroese</option>
          <option value="fr">French</option>
          <option value="gl">Galician</option>
          <option value="gu">Gujarati</option>
          <option value="he">Hebrew</option>
          <option value="hi">Hindi</option>
          <option value="hr">Croatian</option>
          <option value="hu">Hungarian</option>
          <option value="hy">Armenian</option>
          <option value="id">Indonesian</option>
          <option value="is">Icelandic</option>
          <option value="it">Italian</option>
          <option value="ja">Japanese</option>
          <option value="ka">Georgian</option>
          <option value="kk">Kazakh</option>
          <option value="kn">Kannada</option>
          <option value="ko">Korean</option>
          <option value="kok">Konkani</option>
          <option value="ky">Kyrgyz</option>
          <option value="lt">Lithuanian</option>
          <option value="lv">Latvian</option>
          <option value="mi">Maori</option>
          <option value="mk">FYRO Macedonian</option>
          <option value="mn">Mongolian</option>
          <option value="mr">Marathi</option>
          <option value="ms">Malay</option>
          <option value="mt">Maltese</option>
          <option value="nb">Norwegian</option>
          <option value="nl">Dutch</option>
          <option value="ns">Northern Sotho</option>
          <option value="pa">Punjabi</option>
          <option value="pl">Polish</option>
          <option value="ps">Pashto</option>
          <option value="pt">Portuguese</option>
          <option value="qu">Quechua</option>
          <option value="ro">Romanian</option>
          <option value="ru">Russian</option>
          <option value="sa">Sanskrit</option>
          <option value="se">Sami (Northern)</option>
          <option value="sk">Slovak</option>
          <option value="sl">Slovenian</option>
          <option value="sq">Albanian</option>
          <option value="sv">Swedish</option>
          <option value="sw">Swahili</option>
          <option value="syr">Syriac</option>
          <option value="ta">Tamil</option>
          <option value="te">Telugu</option>
          <option value="th">Thai</option>
          <option value="tl">Tagalog</option>
          <option value="tn">Tswana</option>
          <option value="tr">Turkish</option>
          <option value="tt">Tatar</option>
          <option value="ts">Tsonga</option>
          <option value="uk">Ukrainian</option>
          <option value="ur">Urdu</option>
          <option value="uz">Uzbek (Latin)</option>
          <option value="vi">Vietnamese</option>
          <option value="xh">Xhosa</option>
          <option value="zh">Chinese</option>
          <option value="zu">Zulu</option>
        </select>
        <label for="lang-to">Translate to: </label>
        <select id="lang-to" name="lang-from">
          <option value="af">Afrikaans</option>
          <option value="ar">Arabic</option>
          <option value="az">Azeri (Latin)</option>
          <option value="be">Belarusian</option>
          <option value="bg">Bulgarian</option>
          <option value="ca">Catalan</option>
          <option value="cs">Czech</option>
          <option value="cy">Welsh</option>
          <option value="da">Danish</option>
          <option value="de">German</option>
          <option value="dv">Divehi</option>
          <option value="el">Greek</option>
          <option value="en">English</option>
          <option value="eo">Esperanto</option>
          <option value="es">Spanish</option>
          <option value="et">Estonian</option>
          <option value="eu">Basque</option>
          <option value="fa">Farsi</option>
          <option value="fi">Finnish</option>
          <option value="fo">Faroese</option>
          <option value="fr">French</option>
          <option value="gl">Galician</option>
          <option value="gu">Gujarati</option>
          <option value="he">Hebrew</option>
          <option value="hi">Hindi</option>
          <option value="hr">Croatian</option>
          <option value="hu">Hungarian</option>
          <option value="hy">Armenian</option>
          <option value="id">Indonesian</option>
          <option value="is">Icelandic</option>
          <option value="it">Italian</option>
          <option value="ja">Japanese</option>
          <option value="ka">Georgian</option>
          <option value="kk">Kazakh</option>
          <option value="kn">Kannada</option>
          <option value="ko">Korean</option>
          <option value="kok">Konkani</option>
          <option value="ky">Kyrgyz</option>
          <option value="lt">Lithuanian</option>
          <option value="lv">Latvian</option>
          <option value="mi">Maori</option>
          <option value="mk">FYRO Macedonian</option>
          <option value="mn">Mongolian</option>
          <option value="mr">Marathi</option>
          <option value="ms">Malay</option>
          <option value="mt">Maltese</option>
          <option value="nb">Norwegian</option>
          <option value="nl">Dutch</option>
          <option value="ns">Northern Sotho</option>
          <option value="pa">Punjabi</option>
          <option value="pl">Polish</option>
          <option value="ps">Pashto</option>
          <option value="pt">Portuguese</option>
          <option value="qu">Quechua</option>
          <option value="ro">Romanian</option>
          <option value="ru">Russian</option>
          <option value="sa">Sanskrit</option>
          <option value="se">Sami (Northern)</option>
          <option value="sk">Slovak</option>
          <option value="sl">Slovenian</option>
          <option value="sq">Albanian</option>
          <option value="sv">Swedish</option>
          <option value="sw">Swahili</option>
          <option value="syr">Syriac</option>
          <option value="ta">Tamil</option>
          <option value="te">Telugu</option>
          <option value="th">Thai</option>
          <option value="tl">Tagalog</option>
          <option value="tn">Tswana</option>
          <option value="tr">Turkish</option>
          <option value="tt">Tatar</option>
          <option value="ts">Tsonga</option>
          <option value="uk">Ukrainian</option>
          <option value="ur">Urdu</option>
          <option value="uz">Uzbek (Latin)</option>
          <option value="vi">Vietnamese</option>
          <option value="xh">Xhosa</option>
          <option value="zh">Chinese</option>
          <option value="zu">Zulu</option>
        </select>
      </div>
    </div>
    <button id="create-button">Create translation project</button>
  </section>
  `);
}

function createElementFromHTML(htmlString) {
  let div = document.createElement('div');
  div.innerHTML = htmlString.trim();

  // Change this to div.childNodes to support multiple top-level nodes.
  return div.firstChild;
}

initButtonEvents();
