import React from 'react'
import FooterLinks from './FooterLinks';
import FooterForm from './secondary_pages/FooterForm';
import rodadita from '../../../images/la_rodadita_white.png'
import { NavLink } from 'react-router-dom'



const Footer = () => {
  return (
    
        <footer className="page-footer">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <div className="pd">
                  <div className="logo">
                     <h5><img src={rodadita} width={193} alt="LA RODADITA"/></h5>
                     <p>Suscríbete para recibir información.</p>
                     <FooterForm />
                     <p className="contact">Contacto: <a href="mailto:contacto@larodadita.com" target="_blank"> contacto@larodadita.com </a></p>
                  </div>
                  
                </div>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Enlaces de Interés</h5>
                <ul>
                     <FooterLinks />
                </ul>
              </div>
            </div>
          
          </div>
          <div className="footer-copyright grey darken-1">
            <div className="container">
              <div className="flex-row">
               <p>© 2019 Todos los derechos reservados. La Rodadita</p>  
               
               <NavLink to='/sitemap' className="grey-text text-lighten-4 right">Mapa del Sitio</NavLink>
             </div>
            </div>
          </div>
        </footer>
    
  )
}

export default Footer
