import React from "react";
import DatePicker from "react-datepicker";
import AppoPicker from "./TimePicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import { addDays } from "date-fns";
import "./Calendar.css";
import { YellowButton } from "../components/buttons.js";

function Calendar({
  formDate,
  setFormDate,
  time,
  setTime,
  setBaseDate,
  baseDate
}) {


  const isWeekday = date => {
    const day = date.getDay();
    // return day !== 5 && day !== 6;
    return true
  };

  return (
    <div className="calendarContainer">
      <h1>Choose a date</h1>
      <DatePicker
        selected={formDate}
        filterDate={isWeekday}
        minDate={new Date()}
        maxDate={addDays(new Date(), 20)}
        onChange={date => {
          setFormDate(date);
          setBaseDate(moment(date).format("YYYYMMDD"));
        }}
        inline
      />

      <AppoPicker time={time} setTime={setTime} day={formDate.getDay()} baseDate={baseDate} />
      <p>
        time picked is {time.toString()}
        <br />
        form date : {formDate.getDay()}
        <br />
        base date: {baseDate}
        <br />
      </p>
      <YellowButton href="/confirmation">Continue</YellowButton>
    </div>
  );
}

export default Calendar;
