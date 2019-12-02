import React from "react";
import IntervalViewer from "../components/IntervalViewer";
function AdminWorkingDays() {
  const list=[{day_id:1, day:1,start_time:"0900",end_time:"2100"}];
  return (
    <div className="App">
<IntervalViewer day='1' list={list} />
    </div>
  );
}

export default AdminWorkingDays;
