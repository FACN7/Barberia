const databaseConnection = require("../database/db_connection.js");

const getAllBookings = () => {
  return databaseConnection.query(`SELECT * FROM bookings`)
};

module.exports = getAllBookings;
