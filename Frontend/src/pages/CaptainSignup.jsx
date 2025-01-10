import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CaptainSignup = () => {
  const navigate = useNavigate()


  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const[firstName, setFirstName] = useState('')
  const[lastName, setLastName] = useState('')
  const [userData , setUserData] = useState({})

  const [vehicleColor, setVehicleColor] = useState('')
  const [vehiclePlate, setVehiclePlate] = useState('')
  const [vehicleCapacity, setVehicleCapacity] = useState('')
  const [vehicleType, setVehicleType] = useState('')


  const {captain, setCaptain} = React.useContext(CaptainDataContext)

  const submitHandler = async (e) => {
    e.preventDefault();
  const captainData={
    fullname:{
      firstname: firstName,
      lastname: lastName
    },
    email: email,
    password: password,
    vehicle:{
      color: vehicleColor,
      plate: vehiclePlate,
      capacity: vehicleCapacity,
      vehicleType: vehicleType
    }
  }

  const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData)

  if(response.status === 201){
    const data = response.data
    setCaptain(data.captain)
    localStorage.setItem('token', data.token)
    navigate('/captain-home')
  }

  setEmail('')
  setPassword('')
  setFirstName('')
  setLastName('')
  setVehicleColor('')
  setVehiclePlate('')
  setVehicleCapacity('')
  setVehicleType('')
  }
  return (
    <div className=" p-7 flex flex-col justify-between h-screen">
      <div>
      <img
          className="w-16  mb-2 "
          src="https://pngimg.com/d/uber_PNG24.png"
        />

        <form onSubmit={(e) => submitHandler(e)}>
          <h3 className="text-base w-full font-medium mb-2">What's your Name</h3>
          <div className="flex gap-4 mb-5">
            <input
              type="text"
              className="bg-[#eeeeee]px-4 py-2 border w-1/2 rounded text-base placeholder:text-sm"
              required
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              className="bg-[#eeeeee] px-4 py-2 border w-1/2 rounded text-base placeholder:text-sm"
              required
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <h3 className="text-base font-medium mb-2">What's your Email</h3>
          <input
            type="email"
            className="bg-[#eeeeee] mb-5 px-4 py-2 border w-full rounded text-base placeholder:text-sm"
            required
            placeholder="email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h3 className="text-base font-medium mb-2">Enter Password</h3>
          <input
            type="password"
            required
            className="bg-[#eeeeee] mb-5 px-4 py-2 border w-full rounded text-base placeholder:text-sm"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
            <h3 className='text-base font-medium mb-2'>Vehicle Information</h3>
          <div className='flex gap-4 mb-7'>
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-sm placeholder:text-sm'
              type="text"
              placeholder='Vehicle Color'
              value={vehicleColor}
              onChange={(e) => {
                setVehicleColor(e.target.value)
              }}
            />
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-sm placeholder:text-sm'
              type="text"
              placeholder='Vehicle Plate'
              value={vehiclePlate}
              onChange={(e) => {
                setVehiclePlate(e.target.value)
              }}
            />
          </div>
          <div className='flex gap-4 mb-7'>
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-sm placeholder:text-sm'
              type="number"
              placeholder='Vehicle Capacity'
              value={vehicleCapacity}
              onChange={(e) => {
                setVehicleCapacity(e.target.value)
              }}
            />
            <select
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-sm placeholder:text-sm'
              value={vehicleType}
              onChange={(e) => {
                setVehicleType(e.target.value)
              }}
            >
              <option value="" disabled>Vehicle Type</option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="moto">Moto</option>
            </select>
          </div>

          <button className="bg-[#111] text-white font-semibold mb-3 px-4 py-2  w-full rounded text-lg placeholder:text-sm">
            Create Captain Account
          </button>
        </form>
        <p className="text-center">
          Already have a account?
          <Link to="/captain-login" className="text-blue-600">
            Login here
          </Link>
        </p>
      </div>
      <div>
        <p className="text-[10px] mt-6 lining-tight text-center">
          This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy Policy</span> and <span className='underline'>Terms of Service apply</span>.
        </p>
      </div>
    </div>
  )
}

export default CaptainSignup
