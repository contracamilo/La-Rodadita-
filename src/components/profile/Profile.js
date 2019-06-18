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
                  <p>{auth.displayName}</p>
                  <p>{auth.email}</p>
                  {(auth.uid) &&
                    <p>le putito</p>
                  }
                  {(auth.uid) && <Link to={'/actualiza-perfil'}>Completa Tu Perfil</Link>}
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
