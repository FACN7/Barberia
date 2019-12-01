const databaseConnection = require("../database/db_connection.js");

const getBusyTimeSlots = () => {
  return databaseConnection.query(
    `SELECT booking_time FROM bookings WHERE booking_date='20191203'`
  );
};

module.exports = getBusyTimeSlots;
