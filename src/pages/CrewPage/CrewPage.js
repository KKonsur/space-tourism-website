import React, { useState } from 'react'
import './CrewPage.scss'
import CrewInfo from './CrewInfo'
import CrewImage from './CrewImage'
import DouglasImg from '../../assets/crew/image-douglas-hurley.png'
import ShuttleworthImg from '../../assets/crew/image-mark-shuttleworth.png'
import GloverImg from '../../assets/crew/image-victor-glover.png'
import AnsariImg from '../../assets/crew/image-anousheh-ansari.png'

const CrewPage = ({ data }) => {
   const [crewImg, setCrewImg] = useState({ img: DouglasImg, alt: data[0].name })
   const [currentCrewIndex, setCurrentCrewIndex] = useState(0)

   const handleCrewChange = index => {
      setCurrentCrewIndex(index)
      const item = data[index]

      switch (index) {
         case 0:
            setCrewImg({ img: DouglasImg, alt: item.name });
            break;
         case 1:
            setCrewImg({ img: ShuttleworthImg, alt: item.name });
            break;
         case 2:
            setCrewImg({ img: GloverImg, alt: item.name });
            break;
         case 3:
            setCrewImg({ img: AnsariImg, alt: item.name });
            break;
         default:
            break;
      }
   }

   return (
      <section className='crew'>
         <h1 className="crew__heading"><span>02</span> Meet your crew</h1>
         <div className="crew__content-box">
            <CrewInfo onCrewChange={handleCrewChange} data={data} currentCrewIndex={currentCrewIndex} />
         </div>
         <div className="crew__image-box">
            <CrewImage img={crewImg} />
         </div>
      </section>
   )
}

export default CrewPage