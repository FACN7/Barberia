import React from "react";
import { useRoutes } from "hookrouter";
import Confirmation from "./pages/Confirmation"; //pages to be routed to
import Home from "./pages/Home";
import List from "./pages/List";
import Calendar from "./pages/Calendar";
import Congratulation from "./pages/Congratulation";
import Signin from "./pages/Signin";
import AdminWorkingDays from "./pages/AdminWorkingDays";
import moment from "moment";

//return name stat to confirm page anfd fix all related thing
//talk about date convert
//talk about time at calendar component
//check if still have problem saving to db

import BookingSchedule from "./pages/BookingSchedule";
import "./App.css";

function App() {
  //set date state on higher level to use in all other pages, sent setters and getters to apropriate components (look at calendar for ex.)
  let [formDate, setFormDate] = React.useState(new Date());
  let [baseDate, setBaseDate] = React.useState(
    moment(formDate).format("YYYYMMDD")
  );
  let [time, setTime] = React.useState(
    moment(new Date(), "hmm").format("HHmm")
  );

  //refactored the router to use hooks (it had Switch and all that crap)
  const routes = {
    "/": () => <Home />,
    "/list": () => <List />,
    "/calendar": () => (
      <Calendar
        time={time}
        setTime={setTime}
        formDate={formDate}
        setFormDate={setFormDate}
        baseDate={baseDate}
        setBaseDate={setBaseDate}
      />
    ),
    "/congratulation": () => <Congratulation />,
    "/signin": () => <Signin />,
    "/confirmation": () => (
      <Confirmation time={time} formDate={formDate} baseDate={baseDate} />
    ),
    "/admin": () => <BookingSchedule />,
    "/adminworkingdays": () => <AdminWorkingDays />
  };
  const routeResult = useRoutes(routes);

  return routeResult || <div>Noffin found ,mate</div>;
}

export { App };
