import React, { Component, useState } from "react";

import "./confirmation.css";
import { convertDate, covertTime } from "./covertdate.js";

function Confirmation(props) {
  //use function from covertdate.js  that return date and time filtered and not filtred
  console.log(props.formDate);
  const { filterd_date, not_filterd_date } = convertDate(props.formDate + "");
  const { not_filterd_time, filterd_time } = covertTime(props.formDate + "");

  //states that store form's user information
  let [name, setName] = React.useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error_ms, setError_ms] = useState("");
  const [phone_checkbox, setPhone_checkbox] = useState(true);
  const [email_checkbox, setEmail_checkbox] = useState(true);

  //collect data from inputs
  const collectInputName = event => setName(event.target.value);
  const collectInputEmail = event => setEmail(event.target.value);
  const collectInputPhone = event => setPhone(event.target.value);
  const handlePhoneCheckboxChange = event =>
    setPhone_checkbox(checked => !checked);
  const handleEmailCheckboxChange = event =>
    setEmail_checkbox(checked => !checked);

  //function that check all inputs and set a error message if somthing missing
  const validation = () => {
    let flag = true;
    if (name === "") {
      setError_ms("* name input must be valide");
      flag = false;
    } else if (!phone_checkbox && !email_checkbox) {
      setError_ms("* Please choose how to get confirmation");
      flag = false;
    } else if (email_checkbox && email === "") {
      setError_ms("* Please enter valid email");
      flag = false;
    } else if (phone_checkbox && phone === "") {
      setError_ms("* Please enter valid phone");
      flag = false;
    }
    return flag;
  };

  //when we click on confirm we use if validation function return true we send data to server
  const handleSubmit = event => {
    event.preventDefault();
    if (validation()) {
      setError_ms("");
      const date = filterd_date;
      const time = filterd_time;
      console.log(date, time, "");
      const service = "1";
      const data = {
        date,
        time,
        name,
        email,
        phone,
        service
      };
      console.log(JSON.stringify(data));
      localStorage.setItem("confirmationData", JSON.stringify(data));

      return fetch("/api/savenewbooking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
        .then(window.location.assign("/congratulation"))
        .catch(err => console.log(err));
    }
  };

  return (
    <div className="cofirmation-container">
      <h1>Confirmation</h1>
      <div className="header">
        <h1 className="confirmation_message">
          Your appoitment is on {not_filterd_date} at {not_filterd_time}
        </h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={collectInputName}
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={collectInputEmail}
          />
        </div>
        <div>
          <input
            type="phone"
            name="phone"
            placeholder="Phone"
            onChange={collectInputPhone}
          />
        </div>

        <div className="email_checkbox_input">
          <input
            type="checkbox"
            name="email_confirmation"
            checked={email_checkbox}
            onChange={handleEmailCheckboxChange}
          />{" "}
          Send me confirmation by Email
        </div>

        <div className="phone_checkbox_input">
          <input
            type="checkbox"
            name="phone_confirmation"
            checked={phone_checkbox}
            onChange={handlePhoneCheckboxChange}
          />{" "}
          Send me confirmation by Phone
        </div>
        <br></br>
        <div>
          {" "}
          <span className="error">{error_ms}</span>
        </div>
        <br></br>

        <input type="submit" className="submit" value="Confirm" />
      </form>
    </div>
  );
}

export default Confirmation;
