import React from "react";
import AppointmentPicker from "appointment-picker";
import "appointment-picker/dist/appointment-picker.css";

const AppoPicker = ({ baseDate, day, ...props }) => {
  const [options, setOptions] = React.useState({
    leadingZero: true,
    interval: 30,
    mode: "24h",
    minTime: 9,
    maxTime: 23,
    startTime: 9,
    endTime: 23,
    disabled: []
  });

  const [time, setTime] = React.useState({});

  const createIntervals = () => {
    const interval = options.interval || 30;
    const startTime = options.startTime || 9;
    const endTime = options.endTime || 23;
    let acc = 0, i;
    let timesArray = []
    for (i = startTime; i < endTime; i++) {
      timesArray.push(("00" + i).slice(-2) + "00")
      acc = interval;
      while (acc % 60 != 0 && acc < 60) {
        timesArray.push(("00" + i).slice(-2) + ("00" + acc).slice(-2))
        acc += interval;
      }
    }
    return timesArray;
  };

  /*this function takes the work hours of the barber barberWorkHoursArray,
   and the already booked hours busyTimeSlotsArray, 
   and returns an array of unavailable hours to the time picker*/
  const handelWorkHoursData = ([barberWorkHoursArray, busyTimeSlotsArray]) => {

    let unavailableHours = busyTimeSlotsArray.map(timeSlot => timeSlot.booking_time);
    const timesArray = createIntervals();
    
    const noWorkHours = timesArray.filter((item) => {

      const isWorkinHour = barberWorkHoursArray.reduce((acc, curr) => {

        let result = parseInt(curr.start_time) <= parseInt(item) && parseInt(curr.end_time) > parseInt(item);
        return acc || result;
      }, false);
      return !isWorkinHour;

    });
    



    return [...unavailableHours, ...noWorkHours];
  };


  React.useEffect(() => {
    Promise.all([fetch("/api/getallhours/" + day), fetch("/api/getBusyTimeSlots/" + baseDate)])
      .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
      .then(data => handelWorkHoursData(data))
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
