const express = require("express");
const cors = require("cors");
const app = express();

app.listen(3000);
app.use(express.json());
app.use(cors({
  origin: "*"
}));

app.post('/pdf', (request, response) => {
  console.log(request);
});
