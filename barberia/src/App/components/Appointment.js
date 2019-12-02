import React from "react";
import "./Appointment.css";
import moment from "moment";

function Appointment({ item }) {
  function adminCancelAppointment() {
    const id = item.booking_id;

    return (
      fetch("/api/admincancelappointment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ id })
      })
        .catch(err => console.log(err))
    );
  }

  return (
    <div key={item.booking_id} className="appointment">
      <div className="booking-header">
        <div className="booking-date">#{item.booking_id}</div>
        <div className="booking-cancel">
          <button
            className="cancel-button"
            onClick={() => adminCancelAppointment()}
          >
            CANCEL
          </button>
        </div>
      </div>
      <div className="booking-info">
        <div className="booking-column left">
          <div className="booking-service">
            {moment(item.booking_date).format("MMM Do YY")}
          </div>
          <div className="booking-time">{item.booking_time}</div>
          <div className="booking-service">Service: {item.service_id}</div>
        </div>
        <div className="booking-column right">
          <div className="booking-customername">
            Client: {item.customer_name}
          </div>
          <div className="booking-email">
            {item.customer_email ? item.customer_email : "none"}
          </div>
          <div className="booking-phone">{item.customer_phone}</div>
        </div>
      </div>
    </div>
  );
}

export default Appointment;
