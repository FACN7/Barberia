import React from "react";
import IntervalViewer from "../components/IntervalViewer";
function AdminWorkingDays() {



  return (
    <div className="App">
      <IntervalViewer day="0" />
      <IntervalViewer day="1" />
      <IntervalViewer day="2" />
      <IntervalViewer day="3" />
      <IntervalViewer day="4" />
      <IntervalViewer day="5" />
      <IntervalViewer day="6" />
    </div>
  );
}

export default AdminWorkingDays;
