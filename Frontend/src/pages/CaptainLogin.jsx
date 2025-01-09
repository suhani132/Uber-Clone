import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { CaptainDataContext } from '../context/CaptainContext'


const CaptainLogin = () => {
   const [email, setEmail] = useState('')
      const [password, setPassword] = useState('')

      const {captain, setCaptain} = React.useContext(CaptainDataContext)
      const navigate = useNavigate()

  
      const submitHandler = async (e) => {
          e.preventDefault();
          const captain={
              email: email,
              password: password
          }

          const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captain)

          if(response.status === 200){
            const data = response.data
            setCaptain(data.captain)
            localStorage.setItem('token', data.token)
            navigate('/captain-home')
          }

          
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
