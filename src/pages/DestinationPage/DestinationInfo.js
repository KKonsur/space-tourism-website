import React from 'react'

const DestinationInfo = ({ data, index }) => {
   const info = data[index]
   return (
      <div className='destination__text-box'>
         <h2 className='destination__name'>{info.name}</h2>
         <p className='destination__description'>{info.description}</p>
         <div className="destination__more-info">
            <div className="destination__distance">
               <span>Avg. distance</span>
               <p>{info.distance}</p>
            </div>
            <div className="destination__travel">
               <span>Est. travel time</span>
               <p>{info.travel}</p>
            </div>
         </div>
      </div>
   )
}


export default DestinationInfo