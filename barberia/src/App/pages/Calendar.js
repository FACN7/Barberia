import React from "react";
import DatePicker from "react-datepicker";
import AppoPicker from "./TimePicker";
import {A} from "hookrouter";
import "react-datepicker/dist/react-datepicker.css";

function Calendar({formDate,setFormDate}) {
  const [startDate, setStartDate] = React.useState(formDate || new Date());
  console.log("date is ",formDate ,setFormDate);


  return (
    <div className="calendarContainer">
      <h1>Choose a date</h1>
      <DatePicker
        selected={startDate}
        onChange={date => {setStartDate(date);
        setFormDate(date)}}
        inline
      />

      <AppoPicker />
        <p>date picked is {startDate.toJSON()}</p>

        <A href='/confirmation'>Continue</A>
    </div>
  );
}

export default Calendar;
