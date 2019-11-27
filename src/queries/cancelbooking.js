const databaseConnection = require("../database/db_connection.js");

const cancelbooking = data => {
  console, console.log("cancel booking ", data);

  return databaseConnection.query(
    `DELETE FROM bookings WHERE booking_date=${data.date} AND booking_time=${data.time} AND customer_name=${data.name}`
  );
};

module.exports = cancelbooking;
