import React , { useState }from "react";
import { Link } from "react-router-dom";

const UserSignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const[firstName, setFirstName] = useState('')
  const[lastName, setLastName] = useState('')
  const [userData , setUserData] = useState({})

  const submitHandler = (e) => {
    e.preventDefault();
  setUserData({
    fullName:{
      firstName: firstName,
      lastName: lastName
    },
    email: email,
    password: password
    })

  setEmail('')
  setPassword('')
  setFirstName('')
  setLastName('')
  }

  return (
    <div className=" p-7 flex flex-col justify-between h-screen">
      <div>
        <img
          className="w-16  mb-10 "
          src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png"
        />

        <form onSubmit={(e) => submitHandler(e)}>
          <h3 className="text-base font-medium mb-2">What's your Name</h3>
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
          <button className="bg-[#111] text-white font-semibold mb-3 px-4 py-2  w-full rounded text-lg placeholder:text-sm">
            Login
          </button>
        </form>
        <p className="text-center">
          Already have a account?
          <Link to="/login" className="text-blue-600">
            Login here
          </Link>
        </p>
      </div>
      <div>
      <p className="text-[10px] lining-tight text-center">
          This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy Policy</span> and <span className='underline'>Terms of Service apply</span>.
        </p>
      </div>
    </div>
  );
};

export default UserSignUp;
