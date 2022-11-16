import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import Hamburger from './Hamburger'
import logo from '../../assets/shared/logo.svg'
import './Navigation.scss'

const Navigation = () => {
   const [isActive, setIsActive] = useState(false)
   const handleActive = (active) => {
      setIsActive(active)
   }

   const linkData = [
      { id: '00', name: 'Home', path: '/' },
      { id: '01', name: 'Destination', path: '/destination' },
      { id: '02', name: 'Crew', path: '/crew' },
      { id: '03', name: 'Technology', path: '/technology' },
   ]

   const linkList = linkData.map(link => (
      <li key={link.name} className='navigation__list-item'>
         <NavLink className='navigation__link' to={link.path}>
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
            <img src={logo} alt="" />
         </Link>
         <ul className={isActive ? 'navigation__list-items--active navigation__list-items' : 'navigation__list-items'}>
            {linkList}
         </ul>

         <Hamburger onActive={handleActive} active={isActive} />
      </nav>
   )
}

export default Navigation