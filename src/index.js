const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 8000;
const clientsRoutes = require("./routes/clients")
const cardsRoutes = require("./routes/cards")
const collectionsRoutes = require("./routes/collections")
const ordersRoutes = require("./routes/orders")
const memesRoutes = require("./routes/memes")


app.use(bodyParser.json());
app.use(cors({
  origin : "http://localhost:8080",
  credentials: true,
}))
app.use(clientsRoutes)
app.use(cardsRoutes)
app.use(collectionsRoutes)
app.use(ordersRoutes)
app.use(memesRoutes)

app.listen(port, () => {
  console.log(`Server app listening on port ${port}`);
});