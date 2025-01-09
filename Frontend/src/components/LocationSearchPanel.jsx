import React from "react";

const LocationSearchPanel = (props) => {
  // sample array for LocationSearchPanel
  const locations = [
    "Central Academy GopalPura Road, Jaipur",
    "Amer Fort, Jaipur",
    "Metro Station Badi Chopar, Jaipur",
    "Birla Mandir JLN Marg, Jaipur",
  ];
  return (
    <div>
      {/* this is sample data */}
      {locations.map(function (elem, idx) {
        return (
          <div
          key={idx}
            onClick={() => {
              props.setVehiclePanel(true)
              props.setPanelOpen(false)
            }}
            className="flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl justify-start items-center my-2"
          >
            <h2 className="h-8 w-12 flex items-center justify-center bg-[#eee] rounded-full">
              <i className="ri-map-pin-fill"></i>
            </h2>
            <h4 className="font-medium">{elem} </h4>
          </div>
        );
      })}
    </div>
  );
};

export default LocationSearchPanel;
