import React from "react";
import AppointmentPicker from "appointment-picker";
import "appointment-picker/dist/appointment-picker.css";

const AppoPicker = ({ baseDate, ...props }) => {
  const [options, setOptions] = React.useState({
    leadingZero: true,
    interval: 30,
    mode: "24h",
    minTime: 10,
    maxTime: 21,
    startTime: 9,
    endTime: 23,
    disabled: []
  });

  const [time, setTime] = React.useState({});

  React.useEffect(() => {
    fetch("/api/getBusyTimeSlots/" + baseDate)
      .then(res => res.json())
      .then(obj => obj.map(x => x.booking_time))
      .then(arr => {
        const newOptions = JSON.parse(JSON.stringify(options));
        newOptions.disabled = arr;
        setOptions(newOptions);
      })
      .catch(err => {
        const newOptions = JSON.parse(JSON.stringify(options));
        newOptions.disabled = [];
        setOptions(newOptions);
      });
  }, [baseDate]);

  const pickerRef = React.createRef();

  React.useEffect(() => {
    const onTimeSelect = event => {
      setTime(event.displayTime);
      props.setTime(event.displayTime);
    };
    let picker = new AppointmentPicker(pickerRef.current, options);
    const currentRef = pickerRef.current;
    currentRef.addEventListener("change.appo.picker", onTimeSelect);
    return () => {
      currentRef.removeEventListener("change.appo.picker", onTimeSelect);
      picker.destroy();
    };
  }, [options]);

  return (
    <div>
      <input type="text" ref={pickerRef}></input>
    </div>
  );
};

export default AppoPicker;
