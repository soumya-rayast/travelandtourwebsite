import React from 'react'
import "./login.css"
import Navbar from '../Navbar/Navbar'
import { useNavigate } from 'react-router-dom'
const LogIn = () => {
    const navigate = useNavigate()
    return (
        <>
            <Navbar />
            <div className="loginpage">
                <div className="login">
                    <h1>Login</h1>
                    <input type="text" name='email' placeholder='Enter Your email' />
                    <input type="password" name='password' placeholder='Your Password' />
                    <div className="button">Login</div>
                    <div className='or'>or</div>
                    <div className="button" onClick={()=>navigate("/register")}>Register</div>
                </div>
            </div>
        </>
    )
}

export default LogIn
