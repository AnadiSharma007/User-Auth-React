import React from 'react'
import { useState } from 'react';
import axios from "axios"
import "../../src/Components/Register.css"
 import { useNavigate } from 'react-router-dom';

function Register() {

  const api = `https://user-auth-apii.herokuapp.com/api/v1/register`

  const [state, setstate] = useState({
    name: '',
    email: '',
    password: '',
    password1: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleName = e => {

    setstate({
      ...state,
      name: e.target.value
    })
  }

  const handleEmail = e => {
    setstate({
      ...state,
      email: e.target.value
    })
  }

  const handlePassword = e => {
    setstate({
      ...state,
      password: e.target.value,
     
    })
  }
  const handlePassword1 = e => {
    setstate({
      ...state,
      password1: e.target.value,
     
    })
  }

  const handleRegister = async (e) => {
    e.preventDefault();
    if(state.name === "" || state.email === ""){
      setError("Name or Email field should not be empty")
      setSubmitted(false);
    }
    
    else if(state.password.length <= 6 || state.name.length <=6){
      setError('Name and Password must be greater than 6 digits')
      setSubmitted(false);
    }
    else if(state.password !== state.password1){
        setError("Password and Confirm Password must match")
        setSubmitted(false);
    }
    else{
      try{

        let result = await axios.post(api, {
          name: state.name,
          email: state.email,
          password: state.password
        })
        console.log(result);
        setSubmitted(true);
        setError("");
        navigate('/home')
        }
        catch(err){
          setError("Something went wrong try again");
        }
      }
    }
  

  return (
    <div className='container'>
    <div className='form-container'>
      <form className='register-form' onSubmit={(e) => handleRegister(e)}>
        {submitted ? <div className="sucess-message">Registered Successfully</div> : null}
        <div>
          <label htmlFor="">Name:</label>
          <input type="text" value={state.name} onChange={handleName} id="name" />
        </div>
        <div>
          <label htmlFor="">Email:</label>
          <input type="email" value={state.email} onChange={handleEmail} id="email"/>
        </div>
        <div>
          <label htmlFor="">Password:</label>
          <input type="password" value={state.password} onChange={handlePassword} id="password" />
        </div>
        <div>
          <label htmlFor="">Confirm Password:</label>
          <input type="password" value={state.password1} onChange={handlePassword1} id="password1" />
        </div>
        <div>
          <p className='error_message'>{error}</p>
        </div>
        <button className='button' type='submit'>Sign Up</button>
      </form>
      <div className='register'>
       <p>Already have an account?</p>
        <p className="redirect" 
         onClick={() => navigate("/login")}
        >
        Log In
        </p>
        </div>
    </div>
    </div>
  )
}

export default Register