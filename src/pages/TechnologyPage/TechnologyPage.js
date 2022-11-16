import React, { useState } from 'react'
import './TechnologyPage.scss'
import TechnologyButtons from './TechnologyButtons'
import launchVehicleImg from '../../assets/technology/image-launch-vehicle-portrait.jpg'
import spaceCapsuleImg from '../../assets/technology/image-space-capsule-portrait.jpg'
import spaceportImg from '../../assets/technology/image-spaceport-portrait.jpg'
import TechnologyImages from './TechnologyImages'
import TechnologyInfo from './TechnologyInfo'

const TechnologyPage = ({ data }) => {
   const [technologyImg, setTechnologyImg] = useState({ img: launchVehicleImg, alt: data[0].name })
   const [currentTechnologyIndex, setCurrentTechnologyIndex] = useState(0)


   const handleDataChange = index => {
      setCurrentTechnologyIndex(index)
      const item = data[index]

      switch (index) {
         case 0:
            setTechnologyImg({ img: launchVehicleImg, alt: item.name });
            break;
         case 1:
            setTechnologyImg({ img: spaceCapsuleImg, alt: item.name });
            break;
         case 2:
            setTechnologyImg({ img: spaceportImg, alt: item.name });
            break;
         default:
            break;
      }
   }
   return (
      <section className='technology'>
         <h1 className='technology__heading'><span>03</span> Space launch 101</h1>
         <div className="technology__content-box">
            <div className="technology__content">
               <div className="technology__buttons">
                  <TechnologyButtons onDataChange={handleDataChange} data={data} />
               </div>
               <TechnologyInfo data={data} index={currentTechnologyIndex} />
            </div>
            <div className="technology__image-box">
               <TechnologyImages data={data} img={technologyImg} />
            </div>
         </div>
      </section>
   )
}

export default TechnologyPage