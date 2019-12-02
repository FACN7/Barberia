const getAllBookings = require("./getAllBookings");
const saveNewBooking = require("./saveNewBooking");
const getBusyTimeSlots = require("./getUnavailableTimes");
const cancelbooking = require("./cancelbooking");
const adminCancelAppointment = require("./adminCancelAppointment");
const {
  cancelschedulebyday,
  insertdaytoscedule,
  getallhours
} = require("./adminHoursQueries");

module.exports = {
  getAllBookings,
  saveNewBooking,
  cancelbooking,
  adminCancelAppointment,
  getBusyTimeSlots,
  cancelschedulebyday,
  insertdaytoscedule,
  getallhours
};
