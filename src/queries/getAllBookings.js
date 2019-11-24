const databaseConnection = require("../database/db_connection.js");

const getAllBookings = () => {
  return new Promise((resolve,reject)=>{
    resolve(
        databaseConnection.query(`SELECT * FROM bookings`)
    );
  });
};

module.exports = getAllBookings;
