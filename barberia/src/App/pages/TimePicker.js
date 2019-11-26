import React from "react";
import AppointmentPicker from "appointment-picker";
import "appointment-picker/dist/appointment-picker.css";

const AppoPicker = props => {
  const [options, setOptions] = React.useState({
    leadingZero: true,
    interval: 30,
    mode: "12h",
    minTime: 10,
    maxTime: 21,
    startTime: 9,
    endTime: 23,
    disabled: ["1:30 pm", "2:00 pm", "7:30 pm"]
  });
  const [time, setTime] = React.useState({});

  const pickerRef = React.createRef();

  React.useEffect(() => {
    const onTimeSelect = event => {
      setTime(event.time);
      props.setTime(event.time);
    };
    const picker = new AppointmentPicker(pickerRef.current, options);
    const currentRef = pickerRef.current;
    currentRef.addEventListener("change.appo.picker", onTimeSelect);
    return () => {
      currentRef.removeEventListener("change.appo.picker", onTimeSelect);
      picker.destroy();
    };
  }, []);

  return (
    <div>
      <input type="text" ref={pickerRef}></input>
    </div>
  );
};

export default AppoPicker;
