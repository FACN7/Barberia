import React from "react";
import Appointment from "../components/Appointment";
import { BurgerBar } from "../components/BurgerBar"
function Schedule() {
  const [list, setList] = React.useState([]);
  React.useEffect(() => {
    fetch("/api/getAllBookings")
      .then(res => res.json())
      .then(list => setList(list));
  }, []);
  return (
    <div>
      <BurgerBar>
        <h3><a href="/admin">Check appointments</a></h3>
        <h3><a href="/adminworkingdays">Change working hours</a></h3>
      </BurgerBar>
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
      </div></div>
  );
}

export default Schedule;
