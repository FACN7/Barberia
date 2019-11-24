const databaseConnection = require("../database/db_connection.js");

const getAllBookings = (cb) => {
  databaseConnection.query(`SELECT * FROM bookings`,
    (err, res) => {
      if (err) {
        return cb(err);
      } else {
        cb(null, res);
      }
    }
  );
};

module.exports = getAllBookings;
