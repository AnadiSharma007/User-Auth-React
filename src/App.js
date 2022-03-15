// import Register from './Components/Register';
import Login from './Components/Login';
import './App.css';
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import Register from './Components/Register';
import Home from './Components/Home';


function App() {
  return (
    <BrowserRouter >
    <div className="App">
      <header className="App-header">
        
        <Routes>
          <Route path='/' element={
            <Navigate to='/login' />
          }/>
          <Route  path="/home" element={<Home />} />
          <Route  path="/login" element={<Login />} />
          <Route  path="/register" element={<Register />} />
        </Routes>
        
      </header>
    </div>
    </BrowserRouter>
  );
}

export default App;
