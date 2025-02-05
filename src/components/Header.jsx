import React from 'react'
import { Link } from 'react-router'
import { NavLink } from 'react-router'

const Header = () => {
  return (
    <div className='flex justify-evenly pt-10 pb-10 w-[100vw]' style={{
      background: 'rgba(0, 0, 0, 0.2)',
    }}>
      <NavLink 
        className={({ isActive }) => 
          `bg-gray-600 text-white rounded-md pt-1 pb-1 pl-2 pr-2 hover:bg-blue-400 ${isActive ? 'bg-green-500 underline' : ''}`
        } 
        to='/about'
      >
        About
      </NavLink>
      <NavLink 
        className={({ isActive }) => 
          `bg-gray-800 text-white rounded-md pt-1 pb-1 pl-2 pr-2 hover:bg-blue-400 ${isActive ? 'underline bg-green-500' : ''}`
        } 
        to='/skills'
      >
        Skills
      </NavLink>
      <NavLink 
        className={({ isActive }) => 
          `bg-gray-800 text-white rounded-md pt-1 pb-1 pl-2 pr-2 hover:bg-blue-400 ${isActive ? 'underline bg-green-500' : ''}`
        } 
        to='/project'
      >
        Projects
      </NavLink>
      <NavLink 
        className={({ isActive }) => 
          `bg-gray-800 text-white rounded-md pt-1 pb-1 pl-2 pr-2 hover:bg-blue-400 ${isActive ? 'underline bg-green-500' : ''}`
        } 
        to='/contact'
      >
        Contact
      </NavLink>
         
    </div>
  )
}

export default Header