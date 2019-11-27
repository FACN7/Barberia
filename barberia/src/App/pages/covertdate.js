export function convertDate(str) {
  var mnths = {
      Jan: "01",
      Feb: "02",
      Mar: "03",
      Apr: "04",
      May: "05",
      Jun: "06",
      Jul: "07",
      Aug: "08",
      Sep: "09",
      Oct: "10",
      Nov: "11",
      Dec: "12"
    },
    date = str.split(" ");
  var filterd_date = [date[3], mnths[date[1]], date[2]].join("");
  var not_filterd_date = [date[3], mnths[date[1]], date[2]].join("-");

  return { not_filterd_date, filterd_date };
}

export function covertTime(str) {
  let time = str.split(" ");
  var filterd_time = time[4].split(":").join("");
  var not_filterd_time = time[4].split(":").join(":");

  return { not_filterd_time, filterd_time };
}
