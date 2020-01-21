import React, { useState } from 'react'

import './register.css'
import 'firebase/auth'
import firebase from '../../config/firebase'

const Register = props => {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [msgType, setMsgType] = useState()
    const [msg, setMsg] = useState()
    const [loading, setLoading] = useState()

    function register() {

        setLoading(true)

        setMsgType(null)

        if (!email || !email) {
            setMsgType('error')
            setMsg('Enter your email address and password')
            return
        }

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(result => {
                setLoading(false)
                setMsgType('success')
            }).catch(err => {
                setMsgType('error')
                setMsg(err.message)
                setLoading(false)
                console.error(err)
            })
    }

    return (
        <div className='form-register'>
            <form className='text-center form-login mx-auto mt-5'>
                <h1 className='h3 mb-3 text-black font-weight-bold'>Register</h1>

                <input
                    onChange={(e) => setEmail(e.target.value)}
                    type='email' className='form-control my-2' placeholder='Email'></input>
                <input
                    onChange={(e) => setPassword(e.target.value)}
                    type='password' className='form-control my-2' placeholder='Password'></input>

                {
                    loading
                        ? <div class="spinner-border text-info" role="status"><span class="sr-only">Loading...</span></div>
                        : <button
                            onClick={register}
                            type='button' className='btn btn-lg btn-block mt-3 btn-register'>Register</button>
                }

                <div className='msg-login text-black text-center my-5'>
                    {msgType === 'success' && <span><strong>Yeah!</strong> User registered successfully</span>}
                    {msgType === 'error' && <span><strong>Ops!</strong> {msg}</span>}
                </div>
            </form>
        </div>
    )
}

export default Register