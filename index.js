const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const queries = require("./src/queries");
const app = express();
const controllers = require("./src/controllers");
const cookieParser = require("cookie-parser");

app.use(cookieParser());
const jsonparser = bodyParser.json();
app.use(jsonparser);
app.use("/api", controllers);
app.use(express.static(path.join(__dirname, "barberia/build")));
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/barberia/build/index.html"));
  });

const port = process.env.PORT || 5000;
app.listen(port);

console.log("App is listening on port " + port);
