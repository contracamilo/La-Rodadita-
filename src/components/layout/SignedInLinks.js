import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'
import profileReducer from '../../store/reducers/profileRdcr';

const SignedInLinks = (props) => {
 
  return (
    <div>
      <ul className="right">
        <li><NavLink to='/create'>Crea un nuevo viaje</NavLink></li>
        <li><NavLink to='/profile'>Perfil</NavLink></li>
        <li><a onClick={props.signOut}>Salir</a></li>
        <li><NavLink to='/' className="btn-floating yellow lighten-1">{props.profile.initials}</NavLink></li>
      </ul>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)