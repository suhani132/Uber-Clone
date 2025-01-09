import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmRide from "../components/ConfirmRide";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = React.useRef(null);
  const vehiclePanelRef = React.useRef(null);
  const vehicleFoundRef = React.useRef(null);
  const waitingForDriverRef = React.useRef(null);
  const panelCloseRef = React.useRef(null);
  const confirmRidePanelRef = React.useRef(null);
  const [vehiclePanel, setVehiclePanel] = useState(false);
  const [confirmRidePanel, setConfirmRidePanel] = useState(false);
  const [vehicleFound, setVehicleFound] = useState(false);
  const [waitingForDriver, setWaitingForDriver] = useState(false);


  const submitHandler = (e) => {
    e.preventDefault();
  };

  useGSAP(function () {
    if(vehiclePanel){
    gsap.to(vehiclePanelRef.current, {
      transform: "translateY(0)",
    })
    }else{
      gsap.to(vehiclePanelRef.current, {
        transform: "translateY(100%)",
        })
        }
  }, [vehiclePanel]);

  useGSAP(function () {
    if(confirmRidePanel){
    gsap.to(confirmRidePanelRef.current, {
      transform: "translateY(0)",
    })
    }else{
      gsap.to(confirmRidePanelRef.current, {
        transform: "translateY(100%)",
        })
        }
  }, [confirmRidePanel]);

  useGSAP(function () {
    if(vehicleFound){
    gsap.to(vehicleFoundRef.current, {
      transform: "translateY(0)",
    })
    }else{
      gsap.to(vehicleFoundRef.current, {
        transform: "translateY(100%)",
        })
        }
  }, [vehicleFound]);

  useGSAP(function () {
    if(waitingForDriver){
    gsap.to(waitingForDriverRef.current, {
      transform: "translateY(0)",
    })
    }else{
      gsap.to(waitingForDriverRef.current, {
        transform: "translateY(100%)",
        })
        }
  }, [waitingForDriver]);

  useGSAP(
    function () {
      if (panelOpen) {
        gsap.to(panelRef.current, {
          height: "70%",
          padding: "24px",
        });
        gsap.to(panelCloseRef.current, {
          opacity: 1,
        });
      } else {
        gsap.to(panelRef.current, {
          height: "0%",
          padding: "0px",
        });
        gsap.to(panelCloseRef.current, {
          opacity: 0,
        });
      }
    },
    [panelOpen]
  );

  return (
    <div className="relative h-screen overflow-hidden">
      <img
        className="w-16  absolute left-5 top-5 "
        src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png"
      />
      <div 
      className="h-screen w-screen">
        {/* image for temporary use */}
        <img
          className="h-full w-full object-cover"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVbCIEO4qvnXXnu_-VUCSHrum6c_8T-8id4NcBeWhBSdXIBY4NIS11ZbnZN_ibO48DdBU&usqp=CAU"
        />
      </div>
      <div className=" flex flex-col justify-end h-screen absolute top-0 w-full  ">
        <div className="h-[30%] bg-white relative p-6">
          <h5
            ref={panelCloseRef}
            onClick={() => setPanelOpen(false)}
            className=" absolute opacity-0 top-6 right-2 text-2xl"
          >
            <i class="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className="text-2xl font-bold">Find a Trip</h4>
          <form onSubmit={(e) => submitHandler(e)}>
            <div className="line absolute h-16 w-1 top-[45%] left-10 bg-gray-900 rounded-full"></div>
            <input
              onClick={() => setPanelOpen(true)}
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              className="bg-[#eee] px-12 py-3 text-base rounded-lg w-full mt-5 "
              type="text"
              placeholder="Enter Pickup Location"
            />
            <input
              onClick={() => setPanelOpen(true)}
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="bg-[#eee] px-12 py-3 text-base rounded-lg w-full mt-3 "
              type="text"
              placeholder="Enter your Destination"
            />
          </form>
        </div>
        <div ref={panelRef} className=" h-[0] bg-white">
          <LocationSearchPanel setPanelOpen={setPanelOpen} setVehiclePanel={setVehiclePanel} />
        </div>
      </div>
      <div ref={vehiclePanelRef} className="fixed w-full z-10 bottom-0 translate-y-full bg-white py-10 pt-12  px-3">
      <VehiclePanel setConfirmRidePanel={setConfirmRidePanel} setVehiclePanel={setVehiclePanel}/>
    </div>
    <div ref={confirmRidePanelRef} className="fixed w-full z-10 bottom-0 translate-y-full bg-white py-6 pt-12  px-3">
     <ConfirmRide  setConfirmRidePanel={setConfirmRidePanel} setVehicleFound={setVehicleFound}/>
    </div>
    <div  ref ={vehicleFoundRef} className="fixed w-full z-10 bottom-0 translate-y-full bg-white py-6 pt-12  px-3">
     <LookingForDriver setVehicleFound={setVehicleFound}/>
    </div>
    <div ref={waitingForDriver} className="fixed w-full z-10 bottom-0 translate-y-full bg-white py-6 pt-12  px-3">
     <WaitingForDriver waitingForDriver={waitingForDriver} />
    </div>
    </div>
  );
};

export default Home;
