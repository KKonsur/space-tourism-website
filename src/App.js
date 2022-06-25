import React, { useState } from 'react'
import Header from './components/Header/Header'
import Navigation from './components/Navigation/Navigation'
import Pages from './components/Pages'
import homeBackground from './assets/home/background-home-desktop.jpg'

const App = () => {
   const data = require('./data.json')
   const [background, setBackground] = useState(homeBackground)
   const changeBackgroundHandler = bg => {
      setBackground(bg)
   }
   return (
      <div className='container' style={{ backgroundImage: `url(${background})` }}>
         <Header>
            <Navigation onChangeBackground={changeBackgroundHandler} />
         </Header>
         <Pages pageData={data} />
      </div>
   )
}

export default App