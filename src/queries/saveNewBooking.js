const databaseConnection = require("../database/db_connection.js");

const saveNewBooking = data => {
  console.log(saveNewBooking, data);
  return databaseConnection.query(
    `INSERT INTO bookings (booking_date,booking_time,customer_name,customer_email,customer_phone,service_id) VALUES($1,$2,$3,$4,$5,$6)`,
    [data.date, data.time, data.name, data.email, data.phone, data.service]
  );
};

module.exports = saveNewBooking;
