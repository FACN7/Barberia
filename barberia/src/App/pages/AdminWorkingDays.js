import React from "react";
import { BurgerBar } from "../components/BurgerBar"
import IntervalViewer from "../components/IntervalViewer";
function AdminWorkingDays() {

  return (
    <div>
      <BurgerBar>
        <h3><a href="/admin">Check appointments</a></h3>
        <h3><a href="/adminworkingdays">Change working hours</a></h3>
      </BurgerBar>
      <div className="App">
        <IntervalViewer day="0" />
        <IntervalViewer day="1" />
        <IntervalViewer day="2" />
        <IntervalViewer day="3" />
        <IntervalViewer day="4" />
        <IntervalViewer day="5" />
        <IntervalViewer day="6" />
      </div></div>
  );
}

export default AdminWorkingDays;
