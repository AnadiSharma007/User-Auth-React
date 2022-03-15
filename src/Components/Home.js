import React from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom'

function Home() {

  const navigate = useNavigate();

  return (
    <div>
      <div className='nav'>
        <p onClick={() => navigate('/login')}>Log In</p>
        <p onClick={() => navigate('/register')}>Sign Up</p>
      </div>
      <div className='welcome-message'>
        <h1>Welcome To Home Screen</h1>
      </div>
    </div>
  )
}

export default Home