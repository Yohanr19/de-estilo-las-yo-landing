import React from 'react'
import './NavBar.css'

const NavBar = () => {
    return (
     <nav className="navbar">
      <ul className="navlink-container">
          <li className="navlink">
          <a href="#conocenos">Conócenos</a>  
          </li>
          <li className="navlink">
          <a href="#compras">Compras</a>  
          </li>
          <li className="navlink">
          <a href="#contacto">Contacto</a>  
          </li>
          
      </ul>
     </nav>
    )
}
export default NavBar