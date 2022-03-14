import React from 'react'
import { useState } from 'react';
import axios from "axios"
function SignUp() {

  const api = `https://user-auth-apii.herokuapp.com/api/v1/register`

  const Register = {
    errors,
    
    
  }

  const [state, setstate] = useState({
    name: '',
    email: '',
    password: '',
    password1: ''
  });

  const [submitted, setSubmitted] = useState(false);


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


    if(state.password != state.password1){
        Register.errors.push("Password and Confirm Password must match")
        console.log("Password and Confirm Password must match")
    }

    if(Register.errors.length == 0){
    let result = await axios.post(api, {
      name: state.name,
      email: state.email,
      password: state.password
    })
      console.log(result);

    setSubmitted(true)
    }
  }

  return (
    <div>
      <form action="" onSubmit={(e) => handleRegister(e)}>
        {submitted ? <div className="">Success! Form Submitted</div> : null}
        <div>
          <label htmlFor="">Name:</label>
          <input type="text" value={state.name} onChange={handleName} />
        </div>
        <div>
          <label htmlFor="">Email:</label>
          <input type="email" value={state.email} onChange={handleEmail} />
        </div>
        <div>
          <label htmlFor="">Password:</label>
          <input type="password" value={state.password} onChange={handlePassword} />
        </div>
        <div>
          <label htmlFor="">Confirm Password:</label>
          <input type="password" value={state.password1} onChange={handlePassword1} />
        </div>
        <button type='submit'>Register</button>
      </form>
    </div>
  )
}

export default SignUp