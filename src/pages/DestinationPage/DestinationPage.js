import React, { useState } from 'react'
import Planets from './Planets'
import DestinationNav from './DestinationNav'
import DestinationInfo from './DestinationInfo'
import './DestinationPage.scss'
import imageMars from '../../assets/destination/image-mars.png'
import imageEuropa from '../../assets/destination/image-europa.png'
import imageMoon from '../../assets/destination/image-moon.png'
import imageTitan from '../../assets/destination/image-titan.png'

const DestinationPage = ({ data }) => {
   const [planetImg, setPlanetImg] = useState({ img: imageMoon, alt: data[0].name })
   const [currentPlanetIndex, setCurrentPlanetIndex] = useState(0)

   const handleDataChange = index => {
      setCurrentPlanetIndex(index)
      const item = data[index]

      switch (index) {
         case 0:
            setPlanetImg({ img: imageMoon, alt: item.name });
            break;
         case 1:
            setPlanetImg({ img: imageMars, alt: item.name });
            break;
         case 2:
            setPlanetImg({ img: imageEuropa, alt: item.name });
            break;
         case 3:
            setPlanetImg({ img: imageTitan, alt: item.name });
            break;
         default:
            break;
      }
   }

   return (
      <section className='destination'>
         <h1 className='destination__heading'><span>01</span> Pick your destination</h1>
         <div className="destination__content-box">
            <div className="destination__image-box">
               <Planets image={planetImg} />
            </div>
            <div className="destination__content">
               <DestinationNav data={data} onDataChange={handleDataChange} />
               <DestinationInfo index={currentPlanetIndex} data={data} />
            </div>
         </div>
      </section>
   )
}

export default DestinationPage