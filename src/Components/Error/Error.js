import React from 'react'
import { NavLink } from 'react-router-dom'
import './Error.css'
// import PageNotFound from '../assets/images/PageNotFound';

const Error = () => {
    return (
        <div className='error'>
            <NavLink className='go-back-main' to='/'>
                <img src="https://files.muzli.space/43e6e439756832db0ff5dd2b76ffef5c.jpeg" />
            </NavLink>
        </div>
    )
}

export default Error;
