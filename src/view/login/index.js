import React from 'react'

import './login.css'

const Login = props => {
    return (
        <div className='login-content d-flex align-items-center'>
            <form className="form-signin mx-auto">
                <div className="text-center mb-4">
                    <img className="mb-4" src="/docs/4.4/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
                    <h1 className="h3 mb-3 font-weight-normal text-white font-weight-bold">Login</h1>
                </div>

                <input type="email" id="inputEmail" className="form-control my-2" placeholder="Email" />
                <input type="password" id="inputPassword" className="form-control my-2" placeholder="Password" />

                <button className="btn btn-lg btn-block btn-login" type="submit">Sign in</button>

                <div className='msg-login text-white text-center my-5'>
                    <span><strong>Yeah!</strong> You're logged in</span>
                    <br />
                    <span><strong>Ops!</strong> User or password invalid</span>
                </div>

                <div className='login-options mt-5 text-center'>
                    <a href='#' className="mx-2">Forgot password</a>
                    <span className='text-white'>&#9964;</span>
                    <a href='#' className="mx-2">Register user</a>
                </div>
            </form>
        </div>
    )
}

export default Login