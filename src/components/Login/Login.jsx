import React, { useContext, useState } from 'react'
import './login.css'

import APIServices from '../../API/ApiServices';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Login() {

    // const { authUser,
    //         setAuthUser,
    //         isLoggedIn, 
    //         setLoggedIn,
    //         userRole,
    //         setUserRole} = AuthContext

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailValidate, setEmailValidate] = useState('');
    const [passwordValidate, setPasswordValidate] = useState('');
    const { authUser, setAuthUser } = useContext(AuthContext)
    const navigate = useNavigate()

    const validateEmail = () => {
        if(!email || email === ''){
            setEmailValidate("Email field can't be blank")
        } else if(!(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email))){
            setEmailValidate("Email pattern is not valid")
        } else {
            setEmailValidate("")
            return true
        }
        return false
    }
        const validatePassword = () => {
        if(!password || password === ''){
            setPasswordValidate("Password field can't be blank")
        } else if(!(/[@#]/g.test(password))){
            setPasswordValidate("Password must contain one special character(@,#)")
        } else if(!(/[a-z]/g.test(password))){
            setPasswordValidate("Password must contain at least one lower case letter")
        } else if(!(/[A-Z]/g.test(password))){
            setPasswordValidate("Password must contain at least one upper case letter")
        } else if(!(/[0-9]/g.test(password))){
            setPasswordValidate("Password must contain at least one digit")
        } else if(password.length < 7){
            setPasswordValidate("Password must be longer than 7 letters")
        } else if(password.length > 14){
            setPasswordValidate("Password must be shorter than 14 letters")
        } else {
            setPasswordValidate("")
            return true
        }
        return false
    } 

    const loginFormSubmit = async(e) => {
        e.preventDefault()
        if(validateEmail() && validatePassword()){
            let data = {
                email: email,
                password: password
            }
            let loginData = await APIServices.login(data)
            if(loginData.data.length<1){
                console.log("Wrong email or password");
                navigate('/login')
            } else {
                let data = { email: loginData.data[0].email,
                            userName: loginData.data[0].userName,
                            id: loginData.data[0].id,
                            isLoggedIn: true,
                            role: loginData.data[0].role }
                            console.log(data);
                localStorage.setItem('userContext', JSON.stringify(data))
                setAuthUser(data);
                navigate('/customer/')
            }
                
        } else 
            console.log("validation failed");
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
                                        <input type="text" placeholder='Your Email'  required autoComplete='true' autoSave='true' className='form-control' name='email' onChange={(e)=>{setEmail(e.target.value); }}/>
                                    </div>
                                    <div className='error-message mb-3 text-left'>
                                           <small className='text-danger'>{emailValidate}</small> 
                                    </div>
                                    <div className='form-group mb-3'>
                                        <input type="password" placeholder='Your Password' required className='form-control' name='password' onChange={(e)=>{setPassword(e.target.value); }}/>
                                    </div>
                                    <div className='error-message mb-3'>
                                           <small className='text-danger'>{passwordValidate}</small> 
                                    </div>
                                    <div className='form-group mb-3'>
                                        <button onClick={(e) => {loginFormSubmit(e)}} className='btn btn-block btn-lg btn-pink'>
                                            Log in
                                        </button>
                                    </div>
                                </form>
                                <div className='different_login'>
                                    <span>OR</span>
                                </div>
                                <div className='form-note text-center'>
                                    Dont have an account?
                                    <a href="/register" className='signUpLink'>Signup now</a>
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
