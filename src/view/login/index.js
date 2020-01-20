import React, { useState } from 'react'

import './login.css'
import 'firebase/auth'
import firebase from '../../config/firebase'

const Login = props => {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    function login() {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(result => {
                alert('User logged in')
            }).catch(err => {
                alert(err)
            })
    }

    return (
        <div className='login-content d-flex align-items-center'>
            <form className="form-signin mx-auto">
                <div className="text-center mb-4">
                    <img className="mb-4" src="/docs/4.4/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
                    <h1 className="h3 mb-3 font-weight-normal text-white font-weight-bold">Login</h1>
                </div>

                <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email" id="inputEmail" className="form-control my-2" placeholder="Email" />
                <input
                    onChange={(e) => setPassword(e.target.value)}
                    type="password" id="inputPassword" className="form-control my-2" placeholder="Password" />

                <button
                    onClick={login}
                    className="btn btn-lg btn-block btn-login" type="button">Sign in</button>

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