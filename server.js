const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require('cookie-parser')
const app = express();
const publicPath = __dirname+'/src/public/'
const https = require('https')
const fs = require("fs");
require('dotenv').config()
const PORT = process.env.SERVER_PORT;
const HOSTNAME = process.env.SERVER_HOST;

const clientsRoutes = require("./src/routes/clients")
const cardsRoutes = require("./src/routes/cards")
const collectionsRoutes = require("./src/routes/collections")
const ordersRoutes = require("./src/routes/orders")
const memesRoutes = require("./src/routes/memes")
const uploadsRoutes = require("./src/routes/uploads");

app.use(express.static(publicPath))
app.use(bodyParser.json());
app.use(cors({
  origin : `https://${HOSTNAME}:${PORT}`,
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


server.listen(PORT, () => {
  console.log(`Server app listening on https://${HOSTNAME}:${PORT}`);
});

module.exports = cachedSessions;