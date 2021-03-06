import React, {useState, useContext, useEffect} from 'react';
import {Link} from 'react-router-dom'
import alertContext from '../../context/alerts/alertContext';
import authContext from '../../context/authentication/authContext'


const Login = (props) => {

  //Extract alertContext
  const alertsContext = useContext(alertContext)
  const { alert, showAlert } = alertsContext

  //Extract authContext
  const authsContext = useContext(authContext)
  const { message, authentication, logIn } = authsContext;

  //In case that the user or password is wrong
  useEffect(() => {
    if (authentication) {
      props.history.push("/projects");
    }

    if (message) {
      showAlert(message.msg, message.category);
    }
    // eslint-disable-next-line
  }, [message, authentication, props.history])

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
    if(email.trim() === ''|| password.trim() === ''){
      showAlert('All fields are required', 'alerta-error')
    }
    // pass it to action
    logIn({email, password})

  }

  return (
    <div className="form-usuario">
      {alert ?
        (<div className={`alerta ${alert.category}`}>
          {alert.msg}
        </div>)
        : null}
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