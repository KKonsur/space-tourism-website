import React, { useState } from 'react'

const DestinationNav = ({ onDataChange, data }) => {
   const [isActive, setIsActive] = useState(0)

   return (
      <ul className='destination__nav-items'>
         {data.map((item, index) => (
            <li
               key={index}
               className={index === isActive ? 'destination__nav-item destination__nav-item--active' : 'destination__nav-item'}
               onClick={() => {
                  setIsActive(index)
                  onDataChange(index)
               }}
            >
               {item.name}
            </li>
         ))}
      </ul>
   )
}


export default DestinationNav