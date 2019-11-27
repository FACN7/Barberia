import React from "react";
import DatePicker from "react-datepicker";
import AppoPicker from "./TimePicker";
import { A } from "hookrouter";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

function Calendar({ formDate, setFormDate, time, setTime }) {
  const [startDate, setStartDate] = React.useState(formDate || new Date());

  return (
    <div className="calendarContainer">
      <h1>Choose a date</h1>
      <DatePicker
        selected={startDate}
        onChange={date => {
          setStartDate(date);
          setFormDate(date);
        }}
        inline
      />

      <AppoPicker time={time} setTime={setTime} />
      <p>date picked is {moment(startDate.toJSON()).format("MMM Do YY")}</p>
      <p>
        time picked is {moment(time).format("LT")} OR {time.toString()}
        <br />
      </p>

      <A href="/confirmation">Continue</A>
    </div>
  );
}

export default Calendar;
