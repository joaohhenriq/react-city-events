import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import './createEvent.css'
import 'firebase/auth'
import firebase from '../../config/firebase'
import Navbar from '../../components/navbar'

export default props => {

    const [loading, setLoading] = useState(false)

    const [msgType, setMsgType] = useState()
    const [title, setTitle] = useState()
    const [type, setType] = useState()
    const [description, setDescription] = useState()
    const [date, setDate] = useState()
    const [time, setTime] = useState()
    const [photo, setPhoto] = useState()
    const userEmail = useSelector(state => state.userEmail)
    // const [userEmail, setUserEmail] = useState()

    const storage = firebase.storage()
    const db = firebase.firestore()

    function create() {

        setMsgType(null)
        setLoading(true)

        storage.ref(`images/${photo.name}`).put(photo)
            .then(() => {
                db.collection('events').add({
                    title: title,
                    type: type,
                    description: description,
                    date: date,
                    time: time,
                    user: userEmail,
                    views: 0,
                    photo: photo.name,
                    public: true,
                    createdAt: new Date()
                })
            }).then(() => {
                setMsgType('success')
                setLoading(false)
            }).catch(err => {
                console.log(err.message)
                setLoading(false)
                setMsgType('error')
            })
    }

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
                        <input
                            onChange={(e) => setTitle(e.target.value)}
                            className='form-control' type='text'></input>
                    </div>

                    <div className='form-group'>
                        <label>Event Type:</label>
                        <select
                            onChange={(e) => setType(e.target.value)}
                            className='form-control' >
                            <option disabled selected value>-- Select a type --</option>
                            <option>Party</option>
                            <option>Theater</option>
                            <option>Show</option>
                            <option>Event</option>
                        </select>
                    </div>

                    <div className='form-group'>
                        <label>Description:</label>
                        <textarea
                            onChange={(e) => setDescription(e.target.value)}
                            className='form-control' rows='3'></textarea>
                    </div>

                    <div className='form-group row'>
                        <div className='col-6'>
                            <label>Date:</label>
                            <input
                                onChange={(e) => setDate(e.target.value)}
                                className='form-control' type='date'></input>
                        </div>

                        <div className='col-6'>
                            <label>Time:</label>
                            <input
                                onChange={(e) => setTime(e.target.value)}
                                className='form-control' type='time'></input>
                        </div>
                    </div>

                    <div className='form-group'>
                        <label>Upload:</label>
                        <input
                            onChange={(e) => setPhoto(e.target.files[0])}
                            className='form-control' type='file'></input>
                    </div>

                    <div className='row'>
                        {
                            loading
                                ? <div className="spinner-border text-info mx-auto" role="status"><span className="sr-only">Loading...</span></div>
                                : <button
                                    onClick={create}
                                    type='button' className='btn btn-lg btn-block mt-3 btn-register'>Create Event</button>
                        }
                    </div>
                </form>
                <div className='msg-login text-center mt-4'>

                    {msgType === 'success' && <span><strong>Yeah!</strong> Event created!</span>}
                    {msgType === 'error' && <span><strong>Ops!</strong> Please, try again later!</span>}

                </div>
            </div>
        </>
    )
}
