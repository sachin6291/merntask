import React, { useReducer } from 'react';
import authContext from './authContext'
import authReducer from './authReducer'

import axiosClient from '../../config/axios'

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

  const registerUser = async data =>{
    try {
      const answer = await axiosClient.post("/api/users", data);
      console.log(answer.data)
      dispatch({
        type: SUCCESSFUL_REGISTRY,
        payload: answer.data
      })
    } catch (error) {

      const alert = {
        msg:error.response.data.msg,
        category: 'alerta-error'
      }
      dispatch({
        type: ERROR_REGISTRY,
        payload: alert
      })
    }
  }

  return(
    <authContext.Provider
      value={{
        token: state.token,
        authentication: state.authentication,
        user: state.user,
        message: state.message,
        registerUser
      }}
    >
      {props.children}
    </authContext.Provider>
  )
}
export default AuthState