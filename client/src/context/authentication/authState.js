import React, { useReducer } from 'react';
import authContext from './authContext'
import authReducer from './authReducer'

import {
  SUCCESSFUL_REGISTRY,
  ERROR_REGISTRY,
  GET_USER,
  SUCCESSFUL_LOGIN,
  ERROR_LOGIN,
  SIGN_OFF,
} from '../../types'



const AuthState = props =>{

  const initialState = {
    token: localStorage.getItem('token'),
    authentication: null,
    user : null,
    message : null
  }
  const [state, dispatch] = useReducer(authReducer, initialState)


  return(
    <authContext.Provider
      value={{
        token: state.token,
        authentication: state.authentication,
        user: state.user,
        message: state.message
      }}
    >
      {props.children}
    </authContext.Provider>
  )
}
export default AuthState