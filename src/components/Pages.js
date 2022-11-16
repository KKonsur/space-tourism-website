import React from 'react'
import { Routes, Route } from 'react-router-dom'
import CrewPage from '../pages/CrewPage/CrewPage'
import DestinationPage from '../pages/DestinationPage/DestinationPage'
import HomePage from '../pages/HomePage/HomePage'
import TechnologyPage from '../pages/TechnologyPage/TechnologyPage'

const Pages = ({ pageData }) => {
   return (
      <Routes>
         <Route path='/' element={<HomePage />} />
         <Route path='/destination' element={<DestinationPage data={pageData.destinations} />} />
         <Route path='/crew' element={<CrewPage data={pageData.crew} />} />
         <Route path='/technology' element={<TechnologyPage data={pageData.technology} />} />
      </Routes>
   )
}

export default Pages