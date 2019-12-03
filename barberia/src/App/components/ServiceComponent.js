import React from "react";
import { A } from "hookrouter";

import "./ServiceComponent.css";

const ServiceComponent = ({ serviceInUse, setServiceInUse, ...props }) => {
  const pos = props.pos;
  const price = props.service[pos].price;
  const infoArr = props.service[pos].info;
  const service_id = props.service[pos].service_id;

  return (
    <A
      href="/calendar"
      onClick={() => {
        setServiceInUse(service_id);
      }}
    >
      <div className="sevice_container">
        <div className="service-header">
          <div className="service_price">{price}</div>
          <div className="sevice_button_div">
            <button className="sevice_button">Click To Book</button>
          </div>
        </div>

        {infoArr.map((info, i) => {
          return (
            <div>
              <div className=" service_info">{info}</div>
            </div>
          );
        })}
      </div>
    </A>
  );
};

export default ServiceComponent;
