export function convertDate(str) {
  const year = str.getYear();
  const month = str.getMonth();
  const day_of_the_month = str.getDate();

  const filterd_date = [year, month, day_of_the_month].join("");
  const not_filterd_date = [year, month, day_of_the_month].join("-");

  return { not_filterd_date, filterd_date };
}

// export function covertTime(str) {
//   let time = str.split(" ");
//   var filterd_time = time[4].split(":").join("");
//   var not_filterd_time = time[4].split(":").join(":");

//   return { not_filterd_time, filterd_time };
// }
