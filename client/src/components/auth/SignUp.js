 import React, { useState } from 'react';
import { Link } from 'react-router-dom'

const SignUp = () => {

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

    //password min length = 6

    //crosscheck the 2 password

    // pass it to action

  }

  return (
    <div className="form-usuario">
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