import React from 'react'

export default function Register() {
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
                                <form action="" method="post">
                                <div className='form-group mb-3'>
                                        <input type="text" placeholder='Your Name' required className='form-control' name='name'/>
                                    </div>
                                    <div className='form-group mb-3'>
                                        <input type="email" placeholder='Your Email' required className='form-control' name='email'/>
                                    </div>
                                    <div className='form-group mb-3'>
                                        <input type="password" placeholder='Your Password' required className='form-control' name='password'/>
                                    </div>
                                    <div className='form-group mb-3'>
                                        <input type="password" placeholder='Confirm Password' required className='form-control' name='confirmPassword'/>
                                    </div>
                                    <div className='form-group mb-3'>
                                        <button type="submit" className='btn btn-block btn-lg btn-pink'>
                                            Log in
                                        </button>
                                    </div>
                                </form>
                                <div className='different_login'>
                                    <span>OR</span>
                                </div>
                                <div className='form-note text-center'>
                                    Dont have an account?
                                    <a href="/login" className='signUpLink'>Login now</a>
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
