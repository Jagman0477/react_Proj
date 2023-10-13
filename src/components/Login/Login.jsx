import React, { useState } from 'react'
import './login.css'

export default function Login() {
  
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    let emailValidate = '';
    let passwordValidate = '';

    const validateLoginForm = () => {
        // if(!email || email === '' || !(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email))){
        //     emailValidate += 'Invalid email' 
        // }
        if(!password || password === '' || (/^[@#][A-Za-z0-9]{7,13}$/.test(password))){
            passwordValidate += "Invalid password"
        }
        return !!passwordValidate
    } 

    const loginFormSubmit = (e) => {
        e.preventDefault()
        if(validateLoginForm())
            console.log(`Email: ${email}\nPassword: ${password}`);
    }

    return (
    <>
        <div className="login_register_wrap section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className='col-xl-6 col-md-10'>
                        <div className='login_wrap'>
                            <div className='padding_eight_all bg-white'>
                                <div className='heading_s1'>
                                    <h3>Login</h3>
                                </div>
                                <form action="" method="">
                                    <div className='form-group mb-3'>
                                        <input type="email" placeholder='Your Email' required autoComplete='true' autoSave='true' className='form-control' name='email' onChange={(e)=>{setEmail(e.target.value)}}/>
                                        <div className='error-message'>
                                           <small className='text-danger'>{emailValidate}</small> 
                                        </div>
                                    </div>
                                    <div className='form-group mb-3'>
                                        <input type="password" placeholder='Your Password' required className='form-control' name='password' onChange={(e)=>{setPassword(e.target.value)}}/>
                                        <div className='error-message'>
                                           <small className='text-danger'>{passwordValidate}</small> 
                                        </div>
                                    </div>
                                    <div className='form-group mb-3'>
                                        <button onClick={(e) => loginFormSubmit(e)} className='btn btn-block btn-lg btn-pink'>
                                            Log in
                                        </button>
                                    </div>
                                </form>
                                <div className='different_login'>
                                    <span>OR</span>
                                </div>
                                <div className='form-note text-center'>
                                    Dont have an account?
                                    <a href="/register" className='signUpLink'>Sign up now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
