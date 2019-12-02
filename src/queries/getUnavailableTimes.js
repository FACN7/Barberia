const databaseConnection = require("../database/db_connection.js");

const getBusyTimeSlots = baseDate => {
  return databaseConnection.query(
    `SELECT booking_time FROM bookings WHERE booking_date=$1`,
    [baseDate]
  );
};

module.exports = getBusyTimeSlots;
