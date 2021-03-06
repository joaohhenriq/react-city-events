import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import './login.css'
import 'firebase/auth'
import firebase from '../../config/firebase'

const Login = props => {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [msgType, setMsgType] = useState()

    const dispatch = useDispatch()

    function login() {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(result => {
                setMsgType('success')
                setTimeout(() => {
                    dispatch({ type: 'LOG_IN', userEmail: email })
                }, 2000)
            }).catch(err => {
                console.error(err)
                setMsgType('error')
            })
    }

    return (
        <div className='login-content d-flex align-items-center'>

            {
                useSelector(state => state.userLogged)
                    ? <Redirect to='/' />
                    : null
            }
            <form className="form-signin mx-auto">
                <div className="text-center mb-4">
                    <i className="fas fa-city text-white fa-7x mb-5" ></i>
                    <h1 className="h3 mb-2 font-weight-normal text-white font-weight-bold">Login</h1>
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

                    {msgType === 'success' && <span><strong>Yeah!</strong> You're logged in</span>}
                    {msgType === 'error' && <span><strong>Ops!</strong> User or password invalid</span>}

                </div>

                <div className='login-options mt-5 text-center'>
                    <Link to='forgotpassword' className="mx-2">Forgot password</Link>
                    <span className='text-white'>&#9964;</span>
                    <Link to='register' className="ml-2 mr-4">Register user</Link>
                </div>
            </form>
        </div>
    )
}

export default Login