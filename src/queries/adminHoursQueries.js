const databaseConnection = require("../database/db_connection.js");

const getallhours = day => {
  return databaseConnection.query(`SELECT * FROM schedule where day=$1`, [day]);
};

const modifyworkingday = (data) => {
  const values = data.list.reduce((acc, row) => { return acc += `('${row.day}',' ${row.start_time}', '${row.end_time}'),` }, '').slice(0, -1);
  const result = databaseConnection.query(`DELETE FROM schedule WHERE day=$1;`, [data.day]).catch(err => console.log(err));
  if (data.list.length) {
    return databaseConnection.query("INSERT INTO schedule (day,start_time,end_time) VALUES " + [values]);
  }
  return result;
};

module.exports = { modifyworkingday, getallhours };




