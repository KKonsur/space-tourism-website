import React, { useState, useEffect } from 'react'
import Header from './components/Header/Header'
import Navigation from './components/Navigation/Navigation'
import Pages from './components/Pages'
import { useLocation } from 'react-router-dom'

const App = () => {
   const data = require('./data.json')
   const [containerClass, setContainerClass] = useState('')
   const location = useLocation()

   useEffect(() => {
      switch (location.pathname) {
         case '/':
            setContainerClass('container--home')
            break
         case '/destination':
            setContainerClass('container--destination')
            break
         case '/crew':
            setContainerClass('container--crew')
            break
         case '/technology':
            setContainerClass('container--technology')
            break
         default:
            setContainerClass('container--home')
      }
   }, [location.pathname])
   
   return (
      <div className={`container ${containerClass}`}>
         <Header>
            <Navigation />
         </Header>
         <Pages pageData={data} />
      </div>
   )
}

export default App