const getAllBookings = require("./getAllBookings");
const saveNewBooking = require("./saveNewBooking");
const getBusyTimeSlots = require("./getUnavailableTimes");
const cancelbooking = require("./cancelbooking");

module.exports = {
  getAllBookings,
  saveNewBooking,
  getBusyTimeSlots,
  cancelbooking
};
