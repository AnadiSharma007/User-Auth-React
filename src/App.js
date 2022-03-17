import { useState } from 'react';
import Login from './Components/Login';
import './App.css';
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import Register from './Components/Register';
import Home from './Components/Home';


function App() {

  const [actualEmail, setActualEmail] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <BrowserRouter >
    <div className="App">
      <header className="App-header">
        
        <Routes>
          <Route  path="/" element={loggedIn ? (<Home setLoggedIn={setLoggedIn} actualEmail={actualEmail} />) : (<Navigate to='/login' />) } />
          <Route  path="/login" element={<Login  setActualEmail={setActualEmail} setLoggedIn={setLoggedIn}/>} />
          <Route  path="/register" element={<Register />} />
        </Routes>
        
      </header>
    </div>
    </BrowserRouter>
  );
}

export default App;
