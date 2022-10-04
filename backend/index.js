const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 8000;
const clientRoute = require("./routes/clients")

app.use(bodyParser.json());
app.use(cors({
  origin : "http://localhost:8080",
  credentials: true,
}))
app.use(clientRoute)

app.listen(port, () => {
  console.log(`Server app listening on port ${port}`);
});