import React from "react";
import "./IntervalViewer.css";


const days = ['Sunday', 'Monday', 'Tuesday', 'Wednsday', 'Thursday', 'Frieday', 'Saturday'];








const IntervalViewer = props => {
    const [editable, setEditable] = React.useState(false);
    const day = days[props.day];
    const deleteUrl = "/api/cancelschedulebyday/"
    const [list, setList] = React.useState(props.list.filter((item) => item.day == props.day));

    const deleteAndAddTimes = () => {
        if (editable) {
            //this line deletes all working hours for this day
            fetch(deleteUrl + props.day)
                .then(() => {
                    fetch("/api/insertdaytoschedule", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(list)
                    })
                        .catch((err) => { console.log(err) });
    
                }).catch(err => console.log(err));
        }
        setEditable(!editable)
    }

    return (
        <div className="interval-day">
            <div className="booking-header">
                <div className="booking-date">{day}</div>
                <div className="booking-cancel">
                    <button className="edit-button" onClick={deleteAndAddTimes}>{(editable) ? "Done" : "Edit"}</button>
                </div>
            </div>
            <div className="booking-info">

                {list.map(item => {
                    return <div>{item.start_time} - {item.end_time}  <button onClick={() => {
                        setList(list.filter((iterator) => iterator.day_id != item.day_id));
                    }} hidden={!editable}>delete</button></div>;
                })}



            </div>
        </div >
    );
};


export default IntervalViewer;