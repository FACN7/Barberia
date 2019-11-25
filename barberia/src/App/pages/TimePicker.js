import React from "react";
import AppointmentPicker from "appointment-picker";
import "appointment-picker/dist/appointment-picker.css";



const AppoPicker = (props) => {
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
    const onTimeSelect = event => setTime(event.time);
    let picker = new AppointmentPicker(pickerRef.current, options);
    pickerRef.current.addEventListener(
      "change.appo.picker",
      onTimeSelect
    );
    return () => {
      pickerRef.current.removeEventListener("change.appo.picker", onTimeSelect);
      picker.destroy();
    }
  }, []);

  return (
    <div>
      <input type="text" ref={pickerRef}></input>
      {/*<code>{JSON.stringify(time)}</code>*/}
    </div>
  );
}

export default AppoPicker;
