import React from "react";
import "./IntervalViewer.css";

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednsday",
  "Thursday",
  "Frieday",
  "Saturday"
];

//this is a dropdownlist component to be used in the component AddTime only.
const DropDownList = (props) => {
  const [value, setValue] = React.useState('0900');
  const [dropList, setDropList] = React.useState(["0900", "0930", "1000", "1030", "1100", "1130", "1200", "1230", "1300", "1330", "1400", "1430", "1500", "1530", "1600", "1630", "1700", "1730", "1800", "1830", "1900", "1930", "2000", "2030", "2100", "2130", "2200", "2230", "2300", "2330"].sort())
  const changePick = (e) => {
    setValue(e.target.value); console.log("DDL value is:" + value + " target.value is: " + e.target.value)
  };

  React.useEffect(() => {
    props.setHour(value);
  }, [value]);

  return <div>
    <select onChange={(e) => changePick(e)} name="hours" >
      {dropList.map(halfHour => <option value={halfHour}>{halfHour.slice(0, 2) + ":" + halfHour.slice(-2)}</option>)}
    </select>
  </div>;
};

//this component consists of 2 DropDownLists and a button to modify the list in the component IntervalViewer 
const AddTime = ({ hidden, addSlot, day }) => {
  const [start_time, setStartTime] = React.useState("0900");
  const [end_time, setEndTime] = React.useState("0900");
  const func = () => {
    addSlot({ day_id: 4, day, start_time, end_time });
  };
  return <div hidden={hidden}>
    <DropDownList setHour={setStartTime} />
    <DropDownList setHour={setEndTime} />
    <button onClick={() => func()}> add </button>
  </div>
};

//component that shows all the times the barber works in one specific week day
const IntervalViewer = props => {
  const [editable, setEditable] = React.useState(false);
  const day = days[props.day];
  const deleteUrl = "/api/cancelschedulebyday/";
  const [list, setList] = React.useState([]);

  const deleteAndAddTimes = () => {
    if (editable) {
      let modifydata = {};
      modifydata.day = props.day;
      modifydata.list = JSON.parse(JSON.stringify(list));

      //this line deletes all working hours for this day
      fetch("/api/modifyworkingday", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(modifydata)
      }).catch(err => console.log(err));
    }
    setEditable(!editable);
  };

  React.useEffect(() => {
    fetch("/api/getallhours/" + props.day)
      .then(res => res.json())
      .then(list => setList(JSON.parse(JSON.stringify(list))))
      .catch(err => console.log(err));
  }, []);

  return (

    <div className="interval-day">
      <div className="booking-header">
        <div className="booking-date">{day}</div>
        <AddTime addSlot={(obj) => { list.push(obj); setList([...list]); console.log(list) }} day={props.day} hidden={!editable} />
        <div className="booking-cancel">
          <button className="edit-button" onClick={deleteAndAddTimes}>
            {editable ? "Done" : "Edit"}
          </button>
        </div>
      </div>
      <div className="booking-info">
        {list.map(item => {
          return (
            <div>
              {item.start_time} - {item.end_time}
              <button
                onClick={() => {
                  setList(
                    list.filter(iterator => iterator.day_id != item.day_id)
                  );
                }}
                hidden={!editable}
              >
                delete
              </button>
              <br />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default IntervalViewer;
