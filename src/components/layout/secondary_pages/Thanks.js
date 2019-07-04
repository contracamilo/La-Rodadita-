import React from 'react'
import { NavLink } from 'react-router-dom'

 const Thankyou = () => { 
  return (
    <div>
        <div className="container secondary-cont terms ">
            <h2>Gracias!</h2>
            <p>Tu acción ha tenido éxito.</p>
            <NavLink to='/' className="grey-text text-lighten-3">Volver a la pagina principal.</NavLink>
            <p>Puedes contactarnos a:  <a href="mailto:contacto@larodadita.com">contacto@larodadita.com</a></p>
        </div>
    </div>
  )
}



export default Thankyou
