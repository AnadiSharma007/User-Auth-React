import React from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom'

function Home({setLoggedIn, actualEmail}) {

  const navigate = useNavigate();
  
  const handleLogOut = (e) => {
    setLoggedIn(false);
    navigate('/login')
  }

  return (
    <div>
      <div className='nav'>
        <button onClick={handleLogOut}>Logout</button>
      </div>
      <div className='welcome-message'>
        <h1>Welcome To Home Screen {actualEmail}</h1>
      </div>
    </div>
  )
}

export default Home