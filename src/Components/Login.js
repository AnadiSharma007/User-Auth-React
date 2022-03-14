import axios from 'axios';
import React, {useState} from 'react'
import "./Login.css"

function Login() {

    const api = `https://user-auth-apii.herokuapp.com/api/v1/login`

    const [state, setState] = useState({
        email: '',
        password: ''

    });
    const [error, setError] = useState('');
    const [submitted, setSubmitted] = useState(false);


    const handleEmail = (e) => {setState({...state, email: e.target.value})}
    const handlePassword = (e) => {setState({...state, password: e.target.value})}

    const handleLogin = async (e) => {
        if(state.email === ""){
            setError("Email is empty")
        }
        else if(state.password === "" || state.password.length <= 6){
            setError("Password must be greater than 6 digits")
        }
        else{
            try{ 
                e.preventDefault();
                let result = await axios.post(api, {
                    email: state.email,
                    password: state.password
                })
                console.log(result);
                setSubmitted(true);
                setError("");
            }
            catch(err){
                setError("Email or Password is Incorrect")
            }
        }
    }

  return (
    <div className='container'>
        <div className='form-container'>
        <form className='register-form' onSubmit={(e) => handleLogin(e)}>
        {submitted ? <div className="sucess-message">Log In Successfull!!</div> : null}
        <div>
          <label htmlFor="">Email:</label>
          <input type="email" value={state.email} onChange={handleEmail} id="email"/>
        </div>
        <div>
          <label htmlFor="">Password:</label>
          <input type="password" value={state.password} onChange={handlePassword} id="password" />
        </div>
        <div>
          <p className='error_message'>{error}</p>
        </div>
        <button className='button' type='submit'>Log In</button>
      </form>
        <div className='register'>
       <p>Don't have an account?</p>
        <p className="redirect" 
        // onClick={() => navigate("/signup")}
        >
        Sign Up
        </p>
        </div>
            
        </div>
    </div>
  )
}

export default Login