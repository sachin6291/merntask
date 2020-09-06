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
    case SUCCESSFUL_LOGIN:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        authentication: true,
        message: null,
        loading:false
      };
    case SIGN_OFF:
    case ERROR_LOGIN:
    case ERROR_REGISTRY:
      localStorage.removeItem('token')
      return {
        ...state,
        token: null,
        user:null,
        authentication:null,
        message: action.payload,
        loading: false
      };
    case GET_USER:
      return {
        ...state,
        authentication:true,
        user: action.payload.user,
        loading: false
      };
    default:
      return state;
  }
}