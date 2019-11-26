import React from "react";
import { useRoutes } from "hookrouter";
import { Route, Switch } from "react-router-dom";
import Confirmation from "./pages/Confirmation"; //pages to be routed to
import Home from "./pages/Home";
import List from "./pages/List";
import Landing from "./pages/Landing";
import Calendar from "./pages/Calendar";
import BookingSchedule from "./pages/BookingSchedule";
import logo from "../logo.svg";
import "./App.css";

function App() {
  //set date state on higher level to use in all other pages, sent setters and getters to apropriate components (look at calendar for ex.)
  let [formDate, setFormDate] = React.useState(new Date());
  //refactored the router to use hooks (it had Switch and all that crap)
  const routes = {
    "/": () => <Home />,
    "/list": () => <List />,
    "/calendar": () => (
      <Calendar formDate={formDate} setFormDate={setFormDate} />
    ),
    "/landing": () => <Landing />,
    "/confirmation": () => <Confirmation />
  };
  const routeResult = useRoutes(routes);

  return routeResult || <div>Noffin found ,mate</div>;
}

export { App };
