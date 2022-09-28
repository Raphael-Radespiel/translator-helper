const express = require("express");
const fileUpload = require("express-fileupload");
const pdfParse = require("pdf-parse");
const path = require("path");

// Declare static path
let staticPath = path.join(__dirname, "public")

const app = express();

app.use(express.static(staticPath));
app.use(fileUpload());

app.get("/", (request, response) => {
  response.sendFile(path.join(staticPath, "index.html"));
});

app.post('/pdf', (request, response) => {
  pdfParse(request.files.pdfFile)
    .then((result) => {
      response.send(result.text);
    });
});

app.post('/txt', (request, response) => {
  let logFile = request.files.textFile;
  let buffer = logFile.data;
  let processedText = buffer.toString('utf8');
  response.send(processedText);
});

app.listen(3000);
