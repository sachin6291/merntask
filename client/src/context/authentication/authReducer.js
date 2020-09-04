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
      return {
        
      }
    case ERROR_REGISTRY:
      return {
       
      }
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