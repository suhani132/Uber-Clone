import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import CaptainDetails from "./CaptainDetails";
import RidePopUp from "../components/RidePopUp";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ConfirmRidePopUp from "../components/ConfirmRidePopUp";


const CaptainHome = () => {

  const [ridePopUpPanel, setRidePopUpPanel] = useState(true)
  const [confirmRidePopUpPanel, setConfirmRidePopUpPanel] = useState(false)

  const ridePopUpPanelRef = useRef(null)
  const confirmRidePopUpPanelRef = useRef(null)

  useGSAP(function () {
    if( confirmRidePopUpPanel){
      gsap.to(confirmRidePopUpPanelRef.current, {
        transform: "translateY(0)"
        })
    }else {
      gsap.to(confirmRidePopUpPanelRef.current, {
        transform: "translateY(100%)"
        })
    }
  },[confirmRidePopUpPanel])

  useGSAP(function () {
    if( ridePopUpPanel){
      gsap.to(ridePopUpPanelRef.current, {
        transform: "translateY(0)"
        })
    }else {
      gsap.to(ridePopUpPanelRef.current, {
        transform: "translateY(100%)"
        })
    }
  },[ridePopUpPanel])

  return (
    <div className="h-screen">
      <div className="fixed p-3 top-0 flex items-center justify-between w-screen">
        <img
          className="w-16"
          src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png"
        />
        <Link
          to="/home"
          className="h-10 w-10 bg-white flex items-center justify-center rounded-full \ "
        >
          <i className="ri-logout-box-r-line text-lg font-medium"></i>
        </Link>
      </div>

      <div className="h-3/5 ">
        <img
          className="h-full w-full object-cover"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVbCIEO4qvnXXnu_-VUCSHrum6c_8T-8id4NcBeWhBSdXIBY4NIS11ZbnZN_ibO48DdBU&usqp=CAU"
          alt=""
        />
      </div>
      <div className="h-2/5 p-6">
        <CaptainDetails />
      </div>
      <div ref={ridePopUpPanelRef}
      className="fixed w-full z-10 bottom-0  bg-white px-3 py-10 pt-12">
        <RidePopUp setRidePopUpPanel={setRidePopUpPanel} setConfirmRidePopUpPanel={setConfirmRidePopUpPanel}/>
      </div>

      <div ref={confirmRidePopUpPanelRef}
      className="fixed w-full h-screen z-10 bottom-0  bg-white px-3 py-10 pt-12">
        <ConfirmRidePopUp setConfirmRidePopUpPanel={setConfirmRidePopUpPanel} setRidePopUpPanel={setRidePopUpPanel}/>
      </div>
    </div>
  );
};

export default CaptainHome;
