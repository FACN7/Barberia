const databaseConnection = require("../database/db_connection.js");

const cancelschedulebyday = day =>
  databaseConnection.query(`DELETE FROM schedule WHERE day=$1`, [day]);

const getallhours = day => {
  console.log("query day is", day);

  return databaseConnection.query(`SELECT * FROM schedule where day=$1`, [day]);
};
const insertdaytoscedule = data =>
  databaseConnection.query(
    ` INSERT INTO schedule (day,start_time,end_time) VALUES ?`,
    [data.map(row => [row.day, row.start_time, row.end_time])]
  );

module.exports = { cancelschedulebyday, insertdaytoscedule, getallhours };
