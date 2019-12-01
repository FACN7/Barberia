const databaseConnection = require("../database/db_connection.js");

const cancelbooking = rawData => {
  const data = rawData;
  return databaseConnection.query(
    `DELETE FROM bookings WHERE (booking_date=$1 AND booking_time=$2 AND customer_name='$3)`,
    [data.date, data.time, data.name]
  );
};

module.exports = cancelbooking;
