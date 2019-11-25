import React, { Component, useState } from "react";

import "./confirmation.css";

function Confirmation() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [phone_checkbox, setPhone_checkbox] = useState(true);

  const collectInputName = event => setName(event.target.value);
  const collectInputEmail = event => setName(event.target.value);
  const collectInputPhone = event => setName(event.target.value);

  const handlePhoneCheckboxChange = event =>
    // setPhone_checkbox({ checked: event.target.checked });
    setPhone_checkbox(checked => !checked);

  console.log(phone_checkbox);

  return (
    <div className="cofirmation-container">
      <h1>Confirmation</h1>
      <div className="header">
        <h1 className="confirmation_message">
          Your appoitment is on November 26 at 16:30
        </h1>
      </div>
      <form>
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
          <input type="checkbox" name="email_confirmation" value="" /> Send me
          confirmation by Email
        </div>

        <div className="phone_checkbox_input2">
          <input
            type="checkbox"
            name="phone_confirmation"
            checked={phone_checkbox}
            onChange={handlePhoneCheckboxChange}
          />{" "}
          Send me confirmation by Phone
        </div>
        <br></br>
        <br></br>
        <br></br>

        <input type="submit" className="submit" value="Confirm" />
      </form>
    </div>
  );
}

export default Confirmation;
