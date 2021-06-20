import React from 'react'
import Conocenos from './Conocenos'
import './Body.css'
import Compras from './Compras'
import Carrusel from './Carrusel'
import Contacto from './Contacto'

const Body = () => {
    return (
        <main className='main-section'>
            <Conocenos/>
            <Compras/>
            <Carrusel />
            <Contacto/>
        </main>
    )
}

export default Body
