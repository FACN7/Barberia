const databaseConnection = require("../database/db_connection.js");

const getuser = ({ email }) => {
  return databaseConnection.query(`SELECT * FROM Users WHERE email=$1`, [
    email
  ]);
};

module.exports = getuser;
