import React from "react";
import "./Appointment.css";

function Appointment({ item }) {
  return (
    <div key={item.booking_id} className="appointment">
      <div className="booking-header">
        <div className="booking-date">{item.booking_date}</div>
        <div className="booking-cancel">
          <button className="cancel-button">CANCEL</button>
        </div>
      </div>
      <div className="booking-info">
        <div className="booking-column left">
          <div className="booking-time">{item.booking_time}</div>
          <div className="booking-service">{item.booking_id}</div>
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
