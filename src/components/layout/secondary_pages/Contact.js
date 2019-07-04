import React from 'react'

 const Contact = () => { 
  return (
    <div>
        <div className="container secondary-cont terms ">
            <h2>Ups!</h2>
            <p>Algo ha salido mal vuelve a intentar en un rato.</p>
            <NavLink to='/' className="grey-text text-lighten-3">Volver a la pagina principal</NavLink>
            <p>Puedes contactarnos a:  <a href="mailto:contacto@larodadita.com">contacto@larodadita.com</a></p>
        </div>
    </div>
  )
}

export default Contact
