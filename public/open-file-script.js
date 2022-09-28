const mainElement = document.querySelector("main");

let projectTitleArray = [];
let keys = Object.keys(localStorage);

let childrenAnchor = [];

for(let key of keys){
  const newAnchor = document.createElement('a');
  newAnchor.textContent = key;
  newAnchor.setAttribute("href", 'edit-text.html');

  childrenAnchor.push(newAnchor);
  mainElement.append(newAnchor, document.createElement("br"));
}


childrenAnchor.forEach((value, number, array) => {
  value.addEventListener("click", () => {
    sessionStorage.setItem("currentText", value.textContent);
  });
});

