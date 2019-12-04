const express = require("express");
const queries = require("../queries");
const router = express.Router();
const path = require("path");
const { sign, verify } = require("jsonwebtoken");
const encryption = require("../encryption");
const env = require("env2");
env("./config.env");
let SECRET = process.env.SECRET;
const notFoundPage = '<p style="font-size: 10vh; text-align: center;">404!</p>';

router.post("/signin", (req, res) => {
  queries
  .getUser()
  .then(row => row.rows[0]).then((userDetails) => {
    const { email, password } = req.body;
    
      if (email == userDetails.email) {
        encryption
          .comparePassword(password, userDetails.password)
          .then(isMatch => {
            if (isMatch) {
              const cookie = sign(userDetails, SECRET);
              res.cookie("jwt", cookie);
              res.send();
            }
            if (!isMatch) {
              res.send();
            }
          })
          .catch(err => console.log(err));
      }
    }).catch(err => {
      res.send("failed to authenticate")
    });
});

router.get("/signout", (req, res) => {
  res.cookie("jwt", 0, { maxAge: 0 });
});

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
  const data = req.body;
  queries.modifyworkingday(data).catch(err => console.log(err));
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
