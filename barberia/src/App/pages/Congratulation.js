import React, { Component, useState } from "react";
import { A } from "hookrouter";
import "./congratulation.css";

function congratulation({ ...props }) {
  const userData = JSON.parse(localStorage.getItem("confirmationData"));
  const { email, phone } = userData;

  const moveTo = destination => {
    window.location.assign(destination);
  };

  const deleteLastBooking = () => {};

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
