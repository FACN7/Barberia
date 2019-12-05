const databaseConnection = require("../database/db_connection.js");

const getuser = () => {
  return databaseConnection.query(`SELECT * FROM users`);
};

module.exports = getuser;
