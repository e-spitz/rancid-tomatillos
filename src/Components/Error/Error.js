import React from 'react'
import { NavLink } from 'react-router-dom'
import './Error.css'

const Error = () => {
    return (
        <div className='error'>
            <h2> 404 Error </h2>
            <NavLink className='go-back' to='/'>
                Back to Movies
            </NavLink>
        </div>
    )
}

export default Error
