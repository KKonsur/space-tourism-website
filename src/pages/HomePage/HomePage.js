import React from 'react'
import './HomePage.scss'
import { Link } from 'react-router-dom'

const HomePage = () => (
   <section className='home'>
      <div className="home__text-box">
         <h1 className='home__heading'>So, you want to travel to <span className='home__space-word'>Space</span></h1>
         <p className='home__paragraph'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
      </div>
      <div className="home__circle">
         <Link to='/destination'>
            <h2>Explore</h2>
         </Link>
      </div>
   </section>
)

export default HomePage