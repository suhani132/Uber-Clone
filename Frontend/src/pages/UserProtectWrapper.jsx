import React, {useEffect, useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import {UserDataContext}  from '../context/userContext'

const UserProtectWrapper = ({
    children
})=>{
   const token = localStorage.getItem('token')
    const navigate = useNavigate()


    useEffect(() => {
        if(!token){
            navigate('/login')
            return null
        }
    }, [ token ])
  return  (
    <>
        {children}
    </>
  )
}

export default UserProtectWrapper
