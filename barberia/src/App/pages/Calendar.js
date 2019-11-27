import React from "react";
import DatePicker from "react-datepicker";
import AppoPicker from "./TimePicker";
import { A } from "hookrouter";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import { addDays } from "date-fns";
import "./Calendar.css";

function Calendar({ formDate, setFormDate, time, setTime }) {
  const [startDate, setStartDate] = React.useState(formDate || new Date());
  const isWeekday = date => {
    const day = date.getDay();
    return day !== 5 && day !== 6;
  };

  return (
    <div className="calendarContainer">
      <h1>Choose a date</h1>
      <DatePicker
        selected={startDate}
        filterDate={isWeekday}
        minDate={new Date()}
        maxDate={addDays(new Date(), 20)}
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
