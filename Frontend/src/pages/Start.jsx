import React from "react";
import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div>
      <div className=" bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1647424825116-fbf8b9415fc5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] flex pt-8 justify-between flex-col h-screen w-full bg-red-400">
      <img className="w-16 ml-8 " src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png"/>
        <div className="bg-white py-5 pb-4 px-4">
          <h2 className="text-3xl font-bold">Get started with Uber</h2>
          <Link to='/login' className=" flex  items-center justify-center font-bold bg-black rounded mt-5 text-white w-full py-3">Continue</Link>
        </div>
      </div>
    </div>
  );
};

export default Start;
 