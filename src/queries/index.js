const getAllBookings = require("./getAllBookings");
const saveNewBooking = require("./saveNewBooking");
const getBusyTimeSlots = require("./getUnavailableTimes");

module.exports = {
  getAllBookings,
  saveNewBooking,
  getBusyTimeSlots
};
