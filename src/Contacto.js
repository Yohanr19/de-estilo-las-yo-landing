import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faDirections } from '@fortawesome/free-solid-svg-icons'

import './Contacto.css'

const Contacto = () => {
    return (
        <div id='contacto'>
            <h3>Siguenos en Instagram</h3>
                <p>Para ver nuestro catálogo completo y estar al tanto de nuevas prendas</p>

               <a href='https://www.instagram.com/de_estilolasyo/' target='_blank'><div className='ig container'> <FontAwesomeIcon icon={faInstagram} /> <h4>@de_estilolasyo</h4></div> </a>
            <h3>Llámanos</h3>
                 <p>Para más información </p>
                <div className='phone container'> <FontAwesomeIcon icon={faPhone} /> <h4>809-477-6960</h4></div>
            <h3>Visitanos</h3>
                <p>Para ver nuestra colección completa y probarte todo lo quieras</p>
                <div className='direction container' ><FontAwesomeIcon icon={faDirections} /> <h4>Calle General Sosa #158 parte atrás</h4></div> 
        </div>
    )
}

export default Contacto
