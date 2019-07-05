
import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
  

  
  return (
    <div>
      <ul className="right">
        <li><NavLink to='/signup'>Crea tu Cuenta</NavLink></li>
        <li><NavLink to='/signin'>Ingresa</NavLink></li>
      </ul>
    </div>
  )
}


export default SignedOutLinks