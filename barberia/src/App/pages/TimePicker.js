import React from "react";
import AppointmentPicker from "appointment-picker";
import "appointment-picker/dist/appointment-picker.css";

class AppoPicker extends React.Component {
  constructor(props) {
    super(props);
    this.options = {
      leadingZero: true,
      interval: 30,
      mode: "12h",
      minTime: 10,
      maxTime: 21,
      startTime: 9,
      endTime: 23,
      disabled: ["1:30 pm", "2:00 pm", "7:30 pm"]
    };
    this.state = { time: {} };
    this.pickerRef = React.createRef();
    this.onTimeSelect = this.onTimeSelect.bind(this);
  }

  onTimeSelect(event) {
    console.log("change.appo.picker", event.time);
    this.setState({ time: event.time });
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.pickerRef}></input>
        {/* <code>{JSON.stringify(this.state.time)}</code>*/}
      </div>
    );
  }

  componentDidMount() {
    this.picker = new AppointmentPicker(this.pickerRef.current, this.options);
    this.pickerRef.current.addEventListener(
      "change.appo.picker",
      this.onTimeSelect
    );
  }

  componentWillUnmount() {
    this.pickerRef.current.removeEventListener(
      "change.appo.picker",
      this.onTimeSelect
    );
    this.picker.destroy();
  }
}

export default AppoPicker;
