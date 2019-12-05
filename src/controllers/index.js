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

router.get("/getBusyTimeSlots/:date", (req, res) => {
  const date = req.params.date;
  queries
    .getBusyTimeSlots(date)
    .then(times => times.rows)
    .then(rows => res.json(rows))
    .catch(err => console.log(err));
});

router.get("/getallhours/:day", (req, res) => {
  const day = req.params.day;
  queries
    .getallhours(day)
    .then(hours => hours.rows)
    .then(rows => res.json(rows))
    .catch(err => console.log(err));
});

router.post("/modifyworkingday", (req, res) => {
  queries.modifyworkingday(req.body)
  .catch(err => console.log(err));
});

router.post("/cancelbooking", (req, res) => {
  const data = req.body;
  queries.cancelbooking(data).catch(err => console.log(err));
});

router.post("/adminCancelAppointment", (req, res) => {
  const id = req.body;
  queries.adminCancelAppointment(id).catch(err => console.log(err));
});



module.exports = router;
