import React, { useReducer } from 'react';
import authContext from './authContext'
import authReducer from './authReducer'

import axiosClient from '../../config/axios'
import tokenAuth from '../../config/tokenAuth'

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
    message : null,
    loading : true
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
      //get the user
      userAuthenticated()
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

  //return the authenticated user
  const userAuthenticated = async ()=>{
    const token = localStorage.getItem('token')
    if (token){
      tokenAuth(token)
    }
    try {
      const answer = await axiosClient.get('/api/auth')
      dispatch({
        type: GET_USER,
        payload:answer.data
      })
    } catch (error) {
      dispatch({
        type: ERROR_LOGIN
      })
    }
  }

  //when the user starts a seccion
  const logIn = async data=>{
    
    try {
      const answer = await axiosClient.post('/api/auth', data)
      dispatch({
        type:SUCCESSFUL_LOGIN,
        payload:answer.data
      })
      //get the user
      userAuthenticated()
    } catch (error) {

      const alert = {
        msg: error.response.data.msg,
        category: 'alerta-error'
      }
      dispatch({
        type: ERROR_LOGIN,
        payload: alert
      })
    }
  }
  const signOff = ()=>{
    dispatch({
      type: SIGN_OFF
    })
  }

  return(
    <authContext.Provider
      value={{
        token: state.token,
        authentication: state.authentication,
        user: state.user,
        message: state.message,
        loading : state.loading,
        registerUser, 
        logIn,
        userAuthenticated,
        signOff
      }}
    >
      {props.children}
    </authContext.Provider>
  )
}
export default AuthState