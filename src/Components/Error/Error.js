import React from 'react'
import { NavLink } from 'react-router-dom'
import './Error.css'

const Error = () => {
    return (
        <div className='error'>
            <NavLink className='go-back' to='/rancid-tomatillos/'>
                <img src="https://files.muzli.space/43e6e439756832db0ff5dd2b76ffef5c.jpeg" alt="404-img"/>
            </NavLink>
        </div>
    )
}

export default Error;
