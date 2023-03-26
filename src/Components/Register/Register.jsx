import React from 'react'
import './register.css'
import Navbar from '../Navbar/Navbar'
import { useNavigate } from 'react-router-dom'
const Register = () => {
    const navigate = useNavigate()
    return (
        <>
            <Navbar />
            <div className="registerPage">
                <div className="register">
                    <h1>Sign up</h1>
                    <input type="text" name='name' placeholder='Enter Your name' />
                    <input type="number" name='number' placeholder='Enter Your Number' />
                    <input type="text" name='email' placeholder='Enter Your email' />
                    <input type="password" name='password' placeholder='Your Password' />
                    <input type="reEnterpassword" placeholder='Re-Enter PassWord' />
                    <div className="button">Register</div>
                    <div className='or'>or</div>
                    <div className="button" onClick={()=>navigate("/login")}>Log In</div>
                </div>
            </div>

        </>
    )
}

export default Register
