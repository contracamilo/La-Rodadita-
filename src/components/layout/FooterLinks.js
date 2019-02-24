import React from 'react'
import { NavLink } from 'react-router-dom'

const FooterLinks  = () => {
  return (
    <div className="links">
      <div className="list-title">
        <strong>LA RODADITA</strong>
      </div>
      <div className="list-1">
        <ul className="right">
          <li><NavLink to='/quienes_somos' className="grey-text text-lighten-3">Quienes Somos</NavLink></li>
          <li><NavLink to='/terminos' className="grey-text text-lighten-3">Terminos y Condiciones</NavLink></li>
          <li><NavLink to='/faq' className="grey-text text-lighten-3">Preguntas Frecuentes</NavLink></li>
        </ul>
        <ul className="left">
          <li>Loremp</li>
          <li>Loremp</li>
          <li>Loremp</li>
        </ul>
      </div>

   
    </div>
  )
}

export default FooterLinks 