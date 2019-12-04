const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const queries = require("./src/queries");
const app = express();
const controllers = require("./src/controllers");
const cookieParser = require("cookie-parser");

app.use(cookieParser());
const jsonparser = bodyParser.json();
app.use(express.static(path.join(__dirname, "barberia/build")));
app.use(jsonparser);
app.use("/api", controllers);

const port = process.env.PORT || 5000;
app.listen(port);

console.log("App is listening on port " + port);
