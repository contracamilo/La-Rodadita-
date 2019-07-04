import React from 'react'
import { NavLink } from 'react-router-dom'
 const Sitemap = () => {
  return (
    <div>
        <div className="container secondary-cont terms map">
            <h2>Mapa del sitio</h2>
            <ul>
                <li><NavLink to='/' className="grey-text text-lighten-3">Home</NavLink></li>
                <li><NavLink to='/viajes' className="grey-text text-lighten-3">Viajes</NavLink></li>
                <li><NavLink to='/quienes_somos' className="grey-text text-lighten-3">Quienes Somos</NavLink></li>
                <li><NavLink to='/terminos' className="grey-text text-lighten-3">Terminos y Condiciones</NavLink></li>
                <li><NavLink to='/faq' className="grey-text text-lighten-3">Preguntas Frecuentes</NavLink></li>
                <li><NavLink to='/privacy-policy' className="grey-text text-lighten-3">Politica de Privacidad</NavLink></li>
                <li><NavLink to='/news' className="grey-text text-lighten-3">Noticias</NavLink></li>
            </ul>
         </div>
    </div>
  )
}

export default Sitemap
