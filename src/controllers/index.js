const express = require("express");
const queries = require("../queries");
const bodyParser = require("body-parser");
const router = express.Router();
const path = require("path");
// var sqlinjection = require("sql-injection");

const app = express();
// app.use(bodyParser.urlencoded({ extended: false }));
const jsonparser = bodyParser.json();

// app.configure(function() {
//   app.use(sqlinjection); // add sql-injection middleware here
// });

router.get("/getList", (req, res) => {
  var list = ["item1", "item2", "item3"];
  res.json(list);
  console.log("Sent list of items");
});
router.get("/getAllBookings", (req, res) => {
  queries
    .getAllBookings()
    .then(bookings => bookings.rows)
    .then(rows => res.json(rows))
    .catch(err => console.log(err));
});

router.post("/savenewbooking", jsonparser, (req, res) => {
  const data = req.body;
  queries.saveNewBooking(data).catch(err => console.log(err));
});

router.get("*", (req, res) => {
  console.log("you arrived at a none query page");
  res.sendFile(path.join(__dirname + "/barberia/build/index.html"));
});

module.exports = router;
