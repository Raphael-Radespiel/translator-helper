const express = require("express");
const cors = require("cors");
const fastFile = require("fast-file-converter").default;
const app = express();

app.listen(3000);
app.use(express.json());
app.use(cors({
  origin: "*"
}));

app.post('/pdf', (request, response) => {
  console.log(request);
});
