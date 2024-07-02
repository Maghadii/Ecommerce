import React from 'react'
import { NavLink } from 'react-router-dom'

const NotFound = () => {
    return (
        <>

            <section className='mt-5 mb-5 pt-5 pb-5 text-center'>
                <h1 className='text-black text-center text-large '>404 Not Found</h1>
                <p className='mt-5'>Your visited page not found. You may go home page.</p>
                <NavLink to="/"><button className='mt-5'>Back to Home Page</button></NavLink>
            </section>
        </>
    )
}

export default NotFound