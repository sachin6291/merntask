import React, {useEffect, useContext} from 'react';
import {Route,Redirect} from 'react-router-dom'
import authContext from '../../context/authentication/authContext'

const PrivateRoute = ({component:Component, ...props }) => {
 
  const authsContext = useContext(authContext)
  const {loading, authentication, userAuthenticated} = authsContext
  useEffect(()=>{
    userAuthenticated()
  },[])
  return ( 
    <Route {...props} render={props => !authentication && !loading ?(
      <Redirect to="/" /> 
    ): (<Component {...props} />) }/>
  );
}
 
export default PrivateRoute;
