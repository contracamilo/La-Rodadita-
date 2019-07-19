import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'


const SignedInLinks = (props) => {
 const { auth } = props;
 let initial;
 if(auth.displayName){
    initial = auth.displayName.substring(0,2)
 }
 console.log(initial);
 
 
 return (
    <div className="links">   
      <ul className="right">
        <li><NavLink to='/viajes'>Viajes</NavLink></li>
        <li><NavLink to='/create'>Crea un nuevo viaje</NavLink></li>
        <li><NavLink to='/profile'>Perfil</NavLink></li>
        <li><a onClick={props.signOut}>Salir</a></li>
        <li>
          <NavLink to='/profile' className="btn-floating ">
            <b>
              { (!auth.displayName) ? props.profile.initials : initial}
            </b>
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignedInLinks)