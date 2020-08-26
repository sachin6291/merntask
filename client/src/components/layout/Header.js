import React from 'react';

const Header = () => {
  return ( 
    <header className="app-header">
      <p className="nombre-usuario">Hola <span>Sachin Tekchandani</span></p>
      <nav className="nav-principal">
        <a href="#!">Sign Off</a>
      </nav>
    </header>
   );
}
 
export default Header;