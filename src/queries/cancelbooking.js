const databaseConnection = require("../database/db_connection.js");

const cancelbooking = rawData => {
  const data = rawData;
  return databaseConnection.query(
    `DELETE FROM bookings WHERE (booking_date='${data.date}' AND booking_time='${data.time}' AND customer_name='${data.name}')`
  );
};

module.exports = cancelbooking;
