import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'


class Profile extends Component {
  render() {
    
    const { auth,  profile } = this.props;
    if(!auth.uid) return <Redirect to='/signin'/>
    
    console.log(auth, profile);

    

    return (
      <div className="container">
        <div className="trip-details-top">

        <div className="row">
            <h2>Tu perfil</h2>
            <div className="col s12 l3">
              <div className="picture">
                <img 
                  src={auth.photoURL}
                  width={200}
                />
              </div>
              <div>
                  {(!profile.profileCompleted) && <Link to={'/actualiza-perfil'}>Completa Tu Perfil</Link>}
                  {(profile.profileCompleted) && <Link to={'/actualiza-perfil'}>Edita Tu Perfil</Link>}
              </div>
            </div>
            <div className="col s12 l4">
                <div className="profile-item">
                  <span>Nombre</span>
                  { profile.profileCompleted 
                    ? (<h4>{profile.firstName} {profile.lastName}</h4>)
                    : (<h4>{auth.firstName} {auth.lastName}</h4>) 
                  }
                </div>

                <div className="profile-item">
                  <span>Correo Electrónico:</span>
                  <p>{auth.email}</p>
                </div>
              
                {(profile.profileCompleted &&
                  <div>
                    <div className="profile-item">
                      <span>Edad:</span>
                      <p>{profile.howOld}</p>
                    </div>

                    <div className="profile-item">
                      <span>Ciudad:</span>
                      <p>{profile.city}</p>
                    </div>
                  
                    <div className="profile-item double">
                      <span>Estado:</span>
                      <p>{profile.activeUser && (<div><span className="green"></span>Activo</div>)}</p>
                      <div className="starts">
                        Calificación General:
                        {profile.userStars}
                      </div>
                    </div>
                  </div>
                
                )}

            </div>
            <div className="col s12 l4">
            {(profile.profileCompleted &&
                  <div>
                    <div className="profile-item">
                      <span>Edad:</span>
                      <p>{profile.howOld}</p>
                    </div>

                    <div className="profile-item">
                      <span>Ciudad:</span>
                      <p>{profile.city}</p>
                    </div>
                  
                    <div className="profile-item double">
                      <span>Estado:</span>
                      <p>{profile.activeUser && (<div><span className="green"></span>Activo</div>)}</p>
                      <div className="starts">
                          <p>Celular:{profile.cellPhone}</p>
                        <p>Dirección:{profile.address}</p>
                        <p>Ciudad:{profile.cellPhone}</p>
                        <p>Contacto en caso de emergencia:{profile.emergencyContact}</p>
                        <p>Telefono de Persona de contacto:{profile.emergencyNum}</p>
                      </div>
                    </div>
                  </div>
                
                )}
            </div>
            <div className="col s12 l4"></div>
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
