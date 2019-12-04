const express = require("express");
const queries = require("../queries");
const router = express.Router();
const path = require("path");
const { sign, verify } = require("jsonwebtoken");
const encryption = require("../encryption");
const env = require("env2");

env("./config.env");

let SECRET = process.env.SECRET;

const userDetails = {
  email: "admin@gmail.com",
  password: "$2b$10$Gld9zDGpR81k0/CYeo2kYOQ9yEJPtd4EiGXbXeAC54EkSgTwKvTIG"
};
const notFoundPage = '<p style="font-size: 10vh; text-align: center;">404!</p>';

router.post("/signin", (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  console.log("email == userDetails.email is ", email == userDetails.email);
  if (email == userDetails.email) {
    encryption
      .comparePassword(password, userDetails.password)
      .then(promisres => res.json(promisres))
      .then(isMatch => {
        if (isMatch) {
          const cookie = sign(userDetails, SECRET);
          res.cookie("jwt", cookie);
        }
        if (!isMatch) {
          console.log("isMatch is a ", isMatch);
          return isMatch;
        }
      })
      .then(data => {
        console.log("finished fetching");
        return data;
      });
  }
  // queries
  //   .getUser(useremail)
  //   .then(row => console.log(row.rows))
  //   .catch(err => console.log(err));

  res.send();
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
