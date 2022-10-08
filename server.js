const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require('cookie-parser')
const app = express();
const port = 80;
const publicPath = __dirname+'/src/public/'

const clientsRoutes = require("./src/routes/clients")
const cardsRoutes = require("./src/routes/cards")
const collectionsRoutes = require("./src/routes/collections")
const ordersRoutes = require("./src/routes/orders")
const memesRoutes = require("./src/routes/memes")
const uploadsRoutes = require("./src/routes/uploads")

app.use(express.static(publicPath))
app.use(bodyParser.json());
app.use(cors({
  origin : "http://localhost:80",
  credentials: true,
}))
app.use(cookieParser())
app.use(clientsRoutes)
app.use(cardsRoutes)
app.use(collectionsRoutes)
app.use(ordersRoutes)
app.use(memesRoutes)
app.use(uploadsRoutes)

app.listen(port, () => {
  console.log(`Server app listening on port ${port}`);
});