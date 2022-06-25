import React, { useState } from 'react'

const CrewButtons = ({ onCrewChange, data }) => {
   const [isActive, setIsActive] = useState(0)
   const buttons = data.map((item, index) => (
      <button
         key={index}
         onClick={() => {
            setIsActive(index)
            onCrewChange(index)
         }}
         className={index === isActive ? 'active-crew-button' : null}
         aria-label={item.text}
      >
      </button>)
   )

   return buttons
}

export default CrewButtons