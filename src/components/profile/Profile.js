import React, { Component } from 'react'
import ProfileUi from './profileUi';
import { Redirect, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'


class Profile extends Component {
  render() {
    
    const { trips, auth,  profiles } = this.props;
    
    console.log(auth);
    
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
                  <p>{auth.displayName}</p>
                  <p>{auth.email}</p>
                  <Link to={'/'}>Completa Tu Perfil</Link>
                  
              </div>
            </div>
          </div>
        
      </div>
    )
  }
}


const mapStateToProps = (state) => {
 
  return {
    trips: state.firestore.ordered.trips,
    auth: state.firebase.auth,
    profiles: state.firestore.ordered.profiles
    
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'trips', limit: 4, orderBy:['createdAt', 'desc'] },
    { collection: 'profiles', limit: 1 }
  ])
)(Profile)
