import React from 'react'
import FooterLinks from './FooterLinks';

const Footer = () => {
  return (
    
        <footer className="page-footer">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <div className="pd">
                  <h5 className="white-text">La rodadita</h5>
                  <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
                </div>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Links</h5>
                <ul>
                     <FooterLinks />
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright grey darken-1">
            <div className="container">
            © 2014 Copyright Text
            <a className="grey-text text-lighten-4 right" href="#!">Mapa del Sitio</a>
            </div>
          </div>
        </footer>
    
  )
}

export default Footer
