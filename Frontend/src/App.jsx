import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Start from './pages/Start'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignup from './pages/CaptainSignup'
import Home from './pages/Home'
import UserProtectWrapper from './pages/UserProtectWrapper'
import  UserLogout  from './pages/UserLogout'

const App = () => {

  
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path='/signup' element={<UserSignup />} />
        <Route path='/captain-login' element={<CaptainLogin />} />
        <Route path='/captain-signup' element={<CaptainSignup />} />
        <Route path='/home' element={
        <UserProtectWrapper>
          <Home />
        </UserProtectWrapper>
         } />


        <Route path='/users/logout' element={<UserProtectWrapper>
          <UserLogout />
        </UserProtectWrapper>} />
        </Routes>
    </div>
  )
}

export default App

