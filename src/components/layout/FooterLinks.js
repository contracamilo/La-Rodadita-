import React from 'react'
import { NavLink } from 'react-router-dom'
import facebook from '../../../images/facebook-logo.png'
import twitter from '../../../images/twitter-logo.png'
import instagram from '../../../images/instagram-logo.png'

const FooterLinks  = () => {
  return (
    <div className="footer-links">
      
      <div className="flex-row">
        <ul className="list-item">
          <li><NavLink to='/quienes_somos' className="grey-text text-lighten-3">Quiénes Somos</NavLink></li>
          <li><NavLink to='/terminos' className="grey-text text-lighten-3">Términos y Condiciones</NavLink></li>
          <li><NavLink to='/faq' className="grey-text text-lighten-3">Preguntas Frecuentes</NavLink></li>
        </ul>
        <ul className="list-item">
          <li><NavLink to='/privacy-policy' className="grey-text text-lighten-3">Politica de Privacidad</NavLink></li>
          <li><NavLink to='/news' className="grey-text text-lighten-3">Noticias</NavLink></li>
        </ul>
        <ul className="list-item social">
          <li><a href='https://www.facebook.com/LaRodaditaNeiva' target="_blank" className="grey-text text-lighten-3">
                <img src={facebook} width={20} alt="facebok"/>
                <span>Facebook</span></a>
          </li>

          <li><a href='https://www.instagram.com/larodadita/' target="_blank" className="grey-text text-lighten-3">
              <img src={instagram} width={20} alt="facebok"/>  
              <span>instagram</span></a></li>
        </ul>
      
      </div>

    </div>
  )
}

export default FooterLinks 