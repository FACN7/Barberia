import React, { Component, useState } from "react";
import { A } from "hookrouter";
import "./congratulation.css";

function congratulation({ ...props }) {
  const userData = JSON.parse(localStorage.getItem("confirmationData"));
  const { email, phone, name } = userData;

  console.log(JSON.stringify(userData));

  const moveTo = home => {
    window.location.assign(home);
  };

  const deleteLastBooking = () => {
    
    return fetch("/api/cancelbooking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userData)
    })
      .then(window.location.assign("/"))
      .catch(err => console.log(err));
  };

  return (
    <div>
      <div className="ms_header">
        <h3 className="text_header">
          Congratulation, your appointment is booked at Nazareth, El-ein We sent
          the confirmation to {email} and {phone}
        </h3>
      </div>
      <form>
        <input
          type="button"
          className="gohome_button"
          value="HOME"
          onClick={() => moveTo("/")}
        />
        <input
          type="button"
          className="cancel_button"
          value="Cancel"
          onClick={() => deleteLastBooking()}
        />
      </form>
    </div>
  );
}

export default congratulation;
