import {
  SUCCESSFUL_REGISTRY,
  ERROR_REGISTRY,
  GET_USER,
  SUCCESSFUL_LOGIN,
  ERROR_LOGIN,
  SIGN_OFF,
 } from '../../types'

export default (state, action) => {
  switch (action.type) {
    case SUCCESSFUL_REGISTRY:
      localStorage.setItem('token', action.payload.token)
      return {
        ...state,
        authentication: true,
        message: null
      };
    case ERROR_REGISTRY:
      return {
        ...state,
        token: null,
        message: action.payload,
      };
    case GET_USER:
      return {

      }
    case SUCCESSFUL_LOGIN:
      return {

      }
    case ERROR_LOGIN:
      return {

      }
    case SIGN_OFF:
      return {

      }
    default:
      return state
  }
}