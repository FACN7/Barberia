import React from "react";
import DatePicker from "react-datepicker";
import AppoPicker from "./TimePicker";

import "react-datepicker/dist/react-datepicker.css";

function Calendar() {
  const [startDate, setStartDate] = React.useState(new Date());
  return (
    <div className="calendarContainer">
      <h1>Choose a date</h1>
      <DatePicker
        selected={startDate}
        onChange={date => setStartDate(date)}
        inline
      />
      <AppoPicker />
    </div>
  );
}

export default Calendar;
