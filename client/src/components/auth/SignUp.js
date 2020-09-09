import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom'
import alertContext from '../../context/alerts/alertContext';
import authContext from '../../context/authentication/authContext'

const SignUp = (props) => {

  //Extract alertContext
  const alertsContext = useContext(alertContext)
  const {alert, showAlert} = alertsContext

  //Extract authContext
   const authsContext = useContext(authContext)
   const { message, authentication, registerUser } = authsContext;

  //in case that the user has authenticated or registered or is duplicate
  useEffect(()=>{
    if(authentication) {
      props.history.push("/projects");
    }

    if(message){
      showAlert(message.msg, message.category);
    }
    // eslint-disable-next-line
  },[message, authentication, props.history])

  //Sign up State name = dom name
  const [user, setUser] = useState({
    name:'',
    email: '',
    password: '',
    confirm:''
  })

  //destructuring user
  const {name, email, password, confirm } = user

  const onChange = e => {

    setUser({
      ...user,
      [e.target.name]: e.target.value
    })

  }
  //when the user wants to log if
  const onSubmit = e => {
    e.preventDefault()

    //validate for no empty input
    if (name.trim() === '' || email.trim() === '' || password.trim() === '' || confirm.trim() === '' ){
      showAlert('All fields are required','alerta-error')
      return
    }

    //password min length = 6
    if(password.length < 6){
      showAlert('Your password must be at least 6 characters long', 'alerta-error')
      return
    }

    //crosscheck the 2 password
    if (password !== confirm) {
      showAlert('Both of your Password must be same', 'alerta-error')
      return
    }

    // pass it to action
    registerUser({name, email, password})

  }

  return (
    <div className="form-usuario">
      {alert? 
        (<div className ={`alerta ${alert.category}`}>
          {alert.msg}
        </div>)
        :null}
      <div className="contenedor-form sombra-dark">
        <h1>Sign up</h1>
        <form
          onSubmit={onSubmit}
        >
          <div className="campo-form">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              value={name}
              onChange={onChange}
            />
          </div>
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
            <label htmlFor="confirm">Password</label>
            <input
              type="password"
              id="confirm"
              name="confirm"
              placeholder="Repeat Your Password"
              value={confirm}
              onChange={onChange}
            />
          </div>
          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Register"
            />
          </div>
        </form>
        <Link to={'/'} className="enlace-cuenta">
          Log In
        </Link>
      </div>
    </div>
  );
}

export default SignUp;