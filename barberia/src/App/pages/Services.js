import React from "react";
import ServiceComponent from "../components/ServiceComponent";

function Services({ service, setServiceInUse, serviceInUse }) {
  const len = service.length;

  return (
    <div className="App">
      <h3 className="text_header">Choose Your Service</h3>
      {service.map((element, i) => {
        return (
          <div>
            <ServiceComponent
              setServiceInUse={setServiceInUse}
              serviceInUse={serviceInUse}
              service={service}
              pos={i}
            />
          </div>
        );
      })}
    </div>
  );
}

export default Services;
