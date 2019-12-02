const databaseConnection = require("../database/db_connection.js");

const adminCancelAppointment = ({ id }) => {
  return databaseConnection.query(
    `DELETE FROM bookings WHERE (booking_id=$1)`,
    [id]
  );
};

module.exports = adminCancelAppointment;
