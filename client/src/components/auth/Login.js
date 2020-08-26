import React, {useState} from 'react';
import {Link} from 'react-router-dom'

const Login = () => {

  //Sign in State
  const[user, setUser]=useState({
    email:'',
    password:''
  })
  //destructuring user
  const {email, password}= user

  const onChange = e=>{

    setUser({
      ...user,
      [e.target.name]: e.target.value
    })

  }
  //when the user wants to log if
  const onSubmit = e => {
    e.preventDefault()

    //validate for no empty input

    // pass it to action

  }

  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Log In</h1>
        <form
          onSubmit={onSubmit}
        >
          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              value={email}
              onChange={onChange}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Your Password"
              value={password}
              onChange={onChange}
            />
          </div>
          <div className="campo-form">
            <input 
              type="submit" 
              className="btn btn-primario btn-block" 
              value="Sign In"
            />
          </div>
        </form>
        <Link to={'/sign-up'} className="enlace-cuenta">
          Sign Up
        </Link>
      </div>
    </div>
  );
}

export default Login;