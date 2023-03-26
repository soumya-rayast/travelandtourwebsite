import React from 'react'
import './register.css'
import Navbar from '../Navbar/Navbar'
const Register = () => {
    return (
        <>
            <Navbar />
            <div className="registerPage">
                <div className="register">
                    <h1>Register</h1>
                    <input type="text" name='name' placeholder='Enter Your name' />
                    <input type="number" name='number' placeholder='Enter Your Number' />
                    <input type="text" name='email' placeholder='Enter Your email' />
                    <input type="password" name='password' placeholder='Your Password' />
                    <input type="reEnterpassword" placeholder='Re-Enter PassWord' />
                    <div className="button">Register</div>
                    <div className='or'>or</div>
                    <div className="button">Log In</div>
                </div>
            </div>

        </>
    )
}

export default Register
