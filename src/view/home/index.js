import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import './home.css'
import Navbar from '../../components/navbar'

const Home = props => (
    <div>
        <Navbar />
        <h1>User: {useSelector(state => state.userEmail)}</h1>
        <h1>Logged In: {useSelector(state => state.userLogged) ? '1' : '0'}</h1>
    </div>
)

export default Home