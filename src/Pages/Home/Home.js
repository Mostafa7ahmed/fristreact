import React from 'react'
import Slider from '../../components/Slider/Slider'
import "./home.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
function Home() {
  return (
    <div className='home'> 
     
      <h2 className='p-5 bg-body-tertiary'> <FontAwesomeIcon icon={faHouse}  className=" text-bg-danger p-5"/> Home</h2>

        
    </div>
  )
}

export default Home