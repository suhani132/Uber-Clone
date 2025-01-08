import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CaptainLogin = () => {
   const [email, setEmail] = useState('')
      const [password, setPassword] = useState('')
      const [captainData , setCaptainData] = useState({})
  
      const submitHandler = (e) => {
          e.preventDefault();
          setCaptainData({
              email: email,
              password: password
          })
         setEmail('')
         setPassword('')
      }
  return (
    <div className=" p-7 flex flex-col justify-between h-screen">
     <div>
        <img
          className="w-16  mb-2 "
          src="https://pngimg.com/d/uber_PNG24.png"
        />

        <form onSubmit={(e) => submitHandler(e)}>
          <h3 className="text-lg font-medium mb-2">What's your email</h3>
          <input
            type="email"
            className="bg-[#eeeeee] mb-7 px-4 py-2 border w-full rounded text-lg placeholder:text-base"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email@example.com"
          />
          <h3 className="text-lg font-medium mb-2">Enter Password</h3>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-[#eeeeee] mb-7 px-4 py-2 border w-full rounded text-lg placeholder:text-base"
            placeholder="password"
          />
          <button className="bg-[#111] text-white font-semibold mb-3 px-4 py-2  w-full rounded text-lg placeholder:text-base">
            Login
          </button>
          
        </form>
        <p className="text-center">Join a fleet?<Link to='/captain-signup' className="text-blue-600">Register as Captain</Link></p>
      </div>
      <div>
        <Link to="/login"
         className="flex items-center justify-center bg-[#d5622d] text-white font-semibold mb-7 px-4 py-2  w-full rounded text-lg placeholder:text-base">
          Sign in as User
        </Link>
      </div>
    </div>
  )
}

export default CaptainLogin
