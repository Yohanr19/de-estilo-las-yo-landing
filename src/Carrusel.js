import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons' 

import './styles/Carrusel.css'
import prenda1 from './images/prenda1.jpg'
import prenda2 from './images/prenda2.jpg'
import prenda3 from './images/prenda3.jpg'

let data = 
[
    {
        id: 1,
        source: prenda1,
    },
    {
        id: 2,
        source: prenda2,
    },
    {
        id: 3,
        source: prenda3,
    }
]


const Carrusel = () => {

    const [currentIndex , setCurrentIndex] = useState(1);

    let current = data.reduce((prev,elem)=>{
        if (elem.id === currentIndex) {
            prev = elem.source;
        }
        return prev;
    },{})
    const nextHandler =  ()=> {
        console.log(data.length)
        console.log(currentIndex)

        if (currentIndex < data.length){
            setCurrentIndex (currentIndex+1);
        }
        else {
            setCurrentIndex(1);
        }
    }
    const prevHandler =  ()=> {
        if (currentIndex > 1){
            setCurrentIndex (currentIndex - 1);
        }
        else {
            setCurrentIndex (data.length);
        }
     }

    return (
        <div id='carrusel'> 
             <FontAwesomeIcon icon={faArrowAltCircleLeft} className='prev btn' onClick={prevHandler} />
             <img onClick={nextHandler} className='slider-img' src={current} alt='Imagen de Carrusel'/>
             <FontAwesomeIcon icon={faArrowAltCircleRight} className='next btn' onClick={nextHandler} />        
        </div>
    )
}

export default Carrusel
