const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require('cookie-parser')
const app = express();
const port = 443;
const publicPath = __dirname+'/src/public/'
const https = require('https')

const clientsRoutes = require("./src/routes/clients")
const cardsRoutes = require("./src/routes/cards")
const collectionsRoutes = require("./src/routes/collections")
const ordersRoutes = require("./src/routes/orders")
const memesRoutes = require("./src/routes/memes")
const uploadsRoutes = require("./src/routes/uploads");
const fs = require("fs");

app.use(express.static(publicPath))
app.use(bodyParser.json());
app.use(cors({
  origin : "https://localhost:443",
  credentials: true,
}))
app.use(cookieParser())
app.use(clientsRoutes)
app.use(cardsRoutes)
app.use(collectionsRoutes)
app.use(ordersRoutes)
app.use(memesRoutes)
app.use(uploadsRoutes)

let cachedSessions = {};

const server = https.createServer({
  key: fs.readFileSync(__dirname + '/src/certificate/privatekey.key'),
  cert: fs.readFileSync(__dirname + '/src/certificate/certificate.crt')
}, app)

server.listen(port, () => {
  console.log(`Server app listening on port ${port}`);
});

module.exports = cachedSessions;