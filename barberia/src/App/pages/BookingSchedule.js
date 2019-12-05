import React from "react";
import Appointment from "../components/Appointment";

function Schedule() {
  const [list, setList] = React.useState([]);
  React.useEffect(() => {
    fetch("/api/getAllBookings")
      .then(res => res.json())
      .then(list => setList(list));
  }, []);
  return (
    <div className="App">
      <h1>Your Bookings</h1>
      {list.length ? (
        <div>
          {list.map(item => {
            return <Appointment item={item} />;
          })}
        </div>
      ) : (
        <div>
          <h2>No List Items Found</h2>
        </div>
      )}
    </div>
  );
}

export default Schedule;
