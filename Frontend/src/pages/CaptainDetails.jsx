import React from 'react'

const CaptainDetails = () => {
  return (
    <div>
       <div className="flex justify-between items-center">
      <div className="flex items-center gap-3 justify-start" >
        <img className="h-10 w-10 rounded-full object-cover "src="https://img.freepik.com/free-photo/young-adult-man-wearing-hoodie-beanie_23-2149393636.jpg" alt="driver-img" />
        <h4 className="text-lg font-medium">Harsh Patel</h4>
      </div>
      <div><h4 className="text-xl font-semibold">RS 295.2</h4>
      <p className="text-sm text-gray-600">Earned</p></div>
     </div>

     <div className="flex p-3 mt-8 bg-gray-100 rounded-xl justify-center items-start gap-4">
      <div className="text-center">
        <i className="text-3xl mb-2 font-thin ri-timer-2-line"/>
        <h5 className="text-lg font-medium">10.2</h5>
        <p className="text-sm text-gray-600">Hours Online</p>
      </div>
      <div  className="text-center">
        <i className="text-3xl mb-2 font-thin ri-speed-up-line"/>
        <h5 className="text-lg font-medium">10.2</h5>
        <p className="text-sm text-gray-600">Hours Online</p>
      </div>
      <div  className="text-center">
        <i className="text-3xl mb-2 font-thin ri-booklet-line"/>
        <h5 className="text-lg font-medium">10.2</h5>
        <p className="text-sm text-gray-600">Hours Online</p>
      </div>
     </div>
    </div>
  )
}

export default CaptainDetails
