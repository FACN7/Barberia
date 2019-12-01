const express = require("express");
const queries = require("../queries");
const router = express.Router();
const path = require("path");

const app = express();

router.get("/getAllBookings", (req, res) => {
  queries
    .getAllBookings()
    .then(bookings => bookings.rows)
    .then(rows => res.json(rows))
    .catch(err => console.log(err));
});

router.post("/savenewbooking", (req, res) => {
  const data = req.body;

  queries.saveNewBooking(data).catch(err => console.log(err));
});

router.post("/cancelbooking", (req, res) => {
  const data = req.body;

  queries.cancelbooking(data).catch(err => console.log(err));
});

router.post("/adminCancelAppointment", (req, res) => {
  const id = req.body;
  queries.adminCancelAppointment(id).catch(err => console.log(err));
});

router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/barberia/build/index.html"));
});

module.exports = router;
