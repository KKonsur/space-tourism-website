import React, { useState } from 'react'
import './Hamburger.scss'

const Hamburger = props => {
   const [isActive, setIsActive] = useState(false)
   let classes

   if (isActive) {
      classes = 'hamburger hamburger--active'
   } else {
      classes = 'hamburger'
   }

   if (props.active) {
      classes = 'hamburger hamburger--active'
   } else {
      classes = 'hamburger'
   }

   return (
      <div onClick={() => {
         setIsActive(prevState => !prevState)
         props.onActive(prevState => !prevState)
      }}
         className={classes}
      >
         <span className="hamburger__inner"></span>
      </div>
   )
}

export default Hamburger