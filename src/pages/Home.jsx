import React from 'react'
import image from '../../public/logoo.png'
import { Link, useNavigate } from 'react-router-dom'

export const Home = () => {
    const navigate = useNavigate()
    return (
        <div className='App'>
            <img src={image} />

            <Link variant='primary' onClick={()=>navigate('/login')} > Login</Link>
            <Link onClick={()=>navigate('/signup')}> Signup</Link>

        </div>
    )


}

