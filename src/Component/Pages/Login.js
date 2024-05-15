import React from 'react'
import "./../CSS/login.css"
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
      
        <div className='login-page'>
            <div className='col-2'>
                <div className='login-form'>
                    <div className='form-title'>
                        <h1>Login</h1>
                        <p>Enter your account details</p>
                    </div>
                    <div className='login-body'>
                        <form>
                            <div className='row-2'>
                                <div class="form-group">
                                    <input type="text" name="username" placeholder="Username" />
                                </div>
                                <div class="form-group">
                                    <input type={showPassword ? 'text' : 'password'} value={password}
                                        onChange={(e) => setPassword(e.target.value)} placeholder="New Password" />
                                    <button className='button-toggle' type="button" onClick={togglePasswordVisibility}>
                                        {showPassword ? <FaEye /> : <FaEyeSlash />}
                                    </button>

                                </div>
                            </div>
                            <div className='form-pass'>
                                <Link to="/createpassword">Forget Password ?</Link>
                            </div>
                            <div class="form-butn text-center">
                                <Link to="/"><button type="submit">Login</button></Link>
                            </div>
                        </form>
                    </div>
                    <div className='signup-info'>
                        <p>Don't have an account ?</p>
                        <Link to="/signup"><button className='btn-login'>Sign up</button></Link>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Login