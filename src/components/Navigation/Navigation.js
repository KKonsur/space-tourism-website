import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import Hamburger from './Hamburger'
import logo from '../../assets/shared/logo.svg'
import './Navigation.scss'
import homeBackground from '../../assets/home/background-home-desktop.jpg'
import destnationBackground from '../../assets/destination/background-destination-desktop.jpg'
import crewBackground from '../../assets/crew/background-crew-desktop.jpg'
import technologyBackground from '../../assets/technology/background-technology-desktop.jpg'

const Navigation = props => {
   const [isActive, setIsActive] = useState(false)
   const handleActive = (active) => {
      setIsActive(active)
   }

   const linkData = [
      { id: '00', name: 'Home', path: '/', bg: homeBackground },
      { id: '01', name: 'Destination', path: '/destination', bg: destnationBackground },
      { id: '02', name: 'Crew', path: '/crew', bg: crewBackground },
      { id: '03', name: 'Technology', path: '/technology', bg: technologyBackground },
   ]

   const linkList = linkData.map(link => (
      <li key={link.name} className='navigation__list-item'>
         <NavLink onClick={() => {
            props.onChangeBackground(link.bg)
            setIsActive(false)
         }}
            className='navigation__link'
            to={link.path}
         >
            <span className='navigation__link-number'>{link.id}</span> {link.name}
         </NavLink>
      </li >
   ))


   return (
      <nav className='navigation'>
         <Link
            to={linkData[0].path}
            onClick={() => setIsActive(false)}
            className="navigation__logo"
            aria-label='home'
         >
            <img src={logo} alt=""
            />
         </Link>
         <ul className={isActive ? 'navigation__list-items--active navigation__list-items' : 'navigation__list-items'}>
            {linkList}
         </ul>

         <Hamburger onActive={handleActive} active={isActive}/>
      </nav>
   )
}

export default Navigation