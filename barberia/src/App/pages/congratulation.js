import React, { Component, useState } from "react";
import "./congratulation.css";

function congratulation() {
  const userData = JSON.parse(localStorage.getItem("confirmationData"));
  const { email, phone } = userData;

  return (
    <div>
      <div className="ms_header">
        <h3 className="text_header">
          Congratulation, your appointment is booked at Nazareth, El-ein We sent
          the confirmation to {email} and {phone}
        </h3>
      </div>
      <form>
        <input type="submit" className="gohome_button" value="HOME" />
        <input type="submit" className="cancel_button" value="Cancel" />
      </form>
    </div>
  );
}

export default congratulation;
