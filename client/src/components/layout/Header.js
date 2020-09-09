import React, {useContext, useEffect} from 'react';
import authContext from '../../context/authentication/authContext'


const Header = () => {

  //get the information of authentication
  const authsContext = useContext(authContext)
  const { user, userAuthenticated, signOff } = authsContext

  useEffect(() => {
    userAuthenticated()
    // eslint-disable-next-line
  }, [])

  return ( 
    <header className="app-header">
      {user?
        <p className="nombre-usuario">Hi, <span>{user.name}</span></p>
        :null}
      <nav className="nav-principal">
        <button 
          className="btn btn-blank cerrar-sesion"
          onClick={()=>signOff()}
        >Sign Off</button>
      </nav>
    </header>
   );
}
 
export default Header;