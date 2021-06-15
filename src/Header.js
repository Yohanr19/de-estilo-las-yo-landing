import React from 'react'
import NavBar from './NavBar'
import logo from './images/logo-de-estilo-las-yo.jpeg'
import './Header.css'


const Header = () => {
    return (
        <header id='header'>
            <section className='top-section'>
            <div className='small-logo-container'>
                <img className='small-logo' src={logo} alt='icon'></img>
                </div>
            <NavBar/>
            </section>
          <div className="header-main-container">
          <h1 className='title'>De Estilo Las Yo</h1>
          <img className='main-logo' src={logo} alt='Estilo las Yo Logo'></img>
          </div>
        </header>
    )
}

export default Header
