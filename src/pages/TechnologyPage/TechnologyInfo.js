import React from 'react'

const TechnologyInfo = ({ data, index }) => {
   const item = data[index]
   return (
      <div className='technology__text-box'>
         <h2 className='technology__name'><span>The terminology...</span>{item.name}</h2>
         <p className='technology__description'>{item.description}</p>
      </div>
   )
}

export default TechnologyInfo