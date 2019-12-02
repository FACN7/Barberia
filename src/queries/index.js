const getAllBookings = require("./getAllBookings");
const saveNewBooking = require("./saveNewBooking");
const getBusyTimeSlots = require("./getUnavailableTimes");
const cancelbooking = require("./cancelbooking");
const adminCancelAppointment = require("./adminCancelAppointment");

module.exports = {
  getAllBookings,
  saveNewBooking,
  cancelbooking,
  adminCancelAppointment,
  getBusyTimeSlots
};
