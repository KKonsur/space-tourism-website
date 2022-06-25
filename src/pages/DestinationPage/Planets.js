import React from 'react'

const Planets = ({ image }) => (
   <img className='destination__planet' src={image.img} alt={image.alt} />
)

export default Planets