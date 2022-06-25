import React, { useState } from 'react'

const TechnologyButtons = ({ data, onDataChange }) => {
   const [isActive, setIsActive] = useState(0)
   return (
      data.map((e, index) => (
         <button
            key={index}
            className={isActive === index ? 'technology-active-button' : null}
            onClick={() => {
               setIsActive(index)
               onDataChange(index)
            }}
         >
            {index + 1}
         </button>
      ))
   )
}

export default TechnologyButtons