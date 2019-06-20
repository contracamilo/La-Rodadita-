import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'


class Profile extends Component {
  render() {
    
    const { auth,  profile } = this.props;
    if(!auth.uid) return <Redirect to='/signin'/>
    
    console.log(profile);

    

    return (
      <div className="dashboard container ">
        
        <div className="row">
            
            <div className="col s12 m6">
              <div className="trip-details">
                  <h2>Tu perfil</h2>
                  <img 
                    src={auth.photoURL}
                    width={50}
                  />
                  <h4>{profile.firstName} {profile.lastName}</h4>
                  <p>Correo Electrónico: {auth.email}</p>

                  {(profile.profileCompleted && <div>
                    <p>Celular:{profile.cellPhone}</p>
                    <p>Dirección:{profile.address}</p>
                    <p>Ciudad:{profile.cellPhone}</p>
                    <p>Contacto en caso de emergencia:{profile.emergencyContact}</p>
                    <p>Telefono de Persona de contacto:{profile.emergencyNum}</p>
                    <p>{auth.displayName}</p>
                  </div>)}
                  
                  
                  {(!profile.profileCompleted) && <Link to={'/actualiza-perfil'}>Completa Tu Perfil</Link>}
                  {(profile.profileCompleted) && <Link to={'/actualiza-perfil'}>Edita Tu Perfil</Link>}
              </div>
            </div>
          </div>
        
      </div>
    )
  }
}




const mapStateToProps = (state, ownProps) => {
   
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}


export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { 
      collection: 'users'
      
    }
  ])
)(Profile)
