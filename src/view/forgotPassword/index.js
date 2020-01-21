import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './forgotPassword.css'
import 'firebase/auth'
import firebase from '../../config/firebase'
import Navbar from '../../components/navbar'

export default props => {

    const [email, setEmail] = useState()
    const [msg, setMsg] = useState()

    function recoverPassword() {
        firebase.auth().sendPasswordResetEmail(email)
            .then(result => {
                setMsg('An email was sent to reset your password!')
            }).catch(err => {
                console.log(err.message)
                setMsg('Invalid email!')
            })
    }

    return (
        <>
            <Navbar />
            <form className='text-center form-login mx-auto mt-5'>
                <h3 className='mb-3'>Forgot Passoword</h3>
                <input
                    onChange={(e) => setEmail(e.target.value)}
                    type='email' className='form-control my-2' placeholder='Email' />

                <div className='msg my-4 text-center'>
                    <span>{msg}</span>
                </div>

                <button
                    onClick={recoverPassword}
                    type='button' className='btn btn-lg btn-block btn-send'>Recover Passoword</button>
            </form>
        </>
    )
}