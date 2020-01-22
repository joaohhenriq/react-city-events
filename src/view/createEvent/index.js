import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import './createEvent.css'
import 'firebase/auth'
import firebase from '../../config/firebase'
import Navbar from '../../components/navbar'

export default props => {

    const [msgType, setMsgType] = useState()

    return (
        <>
            <Navbar />
            <div className='col-12 mt-5'>
                <div className='row'>
                    <h3 className='mx-auto font-weight-bold'>New Event</h3>
                </div>

                <form>
                    <div className='form-group'>
                        <label>Title:</label>
                        <input className='form-control' type='text'></input>
                    </div>

                    <div className='form-group'>
                        <label>Event Type:</label>
                        <select className='form-control' >
                            <option disabled selected value>-- Select a type --</option>
                            <option>Party</option>
                            <option>Theater</option>
                            <option>Show</option>
                            <option>Event</option>
                        </select>
                    </div>

                    <div className='form-group'>
                        <label>Description:</label>
                        <textarea className='form-control' rows='3'></textarea>
                    </div>

                    <div className='form-group row'>
                        <div className='col-6'>
                            <label>Date:</label>
                            <input className='form-control' type='date'></input>
                        </div>

                        <div className='col-6'>
                            <label>Time:</label>
                            <input className='form-control' type='time'></input>
                        </div>
                    </div>

                    <div className='form-group'>
                        <label>Upload:</label>
                        <input className='form-control' type='file'></input>
                    </div>

                    <button
                        type='button' className='btn btn-lg btn-block mt-3 btn-register'>Create Event</button>
                </form>
                <div className='msg-login text-center mt-4'>

                    {msgType === 'success' && <span><strong>Yeah!</strong> Event created!</span>}
                    {msgType === 'error' && <span><strong>Ops!</strong> Please, try again later!</span>}

                </div>
            </div>
        </>
    )
}
