import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import './navbar.css'

const Navbar = props => {

    const dispatch = useDispatch()

    return (
        <nav className="navbar navbar-expand-lg">
            <span className="navbar-brand text-white font-weight-bold">City Events</span>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fas fa-bars text-white"></i>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>

                    {
                        useSelector(state => state.userLogged)
                            ? <>
                                <li className="nav-item active">
                                    <Link className="nav-link" to="createevent">Create Event</Link>
                                </li>
                                <li className="nav-item active">
                                    <Link className="nav-link" to="">My Events</Link>
                                </li>
                                <li className="nav-item active">
                                    <Link
                                        onClick={() => dispatch({ type: 'LOG_OUT' })}
                                        className="nav-link" >Logout</Link>
                                </li>
                            </>
                            : <>
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/register">Register</Link>
                                </li>
                                <li className="nav-item active">
                                    <Link className="nav-link" to="login">Login</Link>
                                </li>
                            </>
                    }
                </ul>
            </div>
        </nav>
    )
}

export default Navbar