import React, { use, useState } from "react";
import "./signin.css";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from "../utils";


function Signin() {
 
  const [signupInfo , setSignupInfo] = useState({
    name:'',
    email:'',
    password:''
  })
 
  const navigate = useNavigate();

  const handdleChange =(e) =>{
    const { name  , value} = e.target;
    const copySignupInfo = { ...signupInfo};
    copySignupInfo[name] = value;
    setSignupInfo(copySignupInfo);
  }
  
  
  const handleSignup = async (e) => {
    e.preventDefault();
    const { name, email, password } = signupInfo;
    if(!name || !email || !password){
      return handleError('All feilds are required')
    }
    try{
      const url ="http://localhost:5050/auth/signup";
      const response = await fetch(url,{
        method:"POST",
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(signupInfo)
      })
      const result  = await response.json();
      const {success , message , error } = result;
      if(success){
        handleSuccess(message);
        setTimeout(()=>{
          navigate('/login')
        },500)
      }
      else if(error){
        const details = error.details[0].message;
        handleError(details);
      }
      else if(!success){
        handleError(message);
      }
      console.log(result);
    } catch (err){
      handleError(err);
    }

  };

  return (
    <div className="signin-container">
      <div className="signin-form">
        <h2>Sign up</h2>
        <form onSubmit={handleSignup}>
        <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name = "name"
              value={signupInfo.name}
              onChange={handdleChange}
              placeholder="Enter your name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name = "email"
              value={signupInfo.email}
              onChange={handdleChange}
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name = "password"
              value={signupInfo.password}
              onChange={handdleChange}
              
              placeholder="Enter your password"
            />
          </div>
          
          <button type="submit" className="Signin-button">
            Sign up
          </button>
          <span>Already have an account ?
              <Link to="/login" >Login</Link>
          </span>
          
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}

export default Signin;
