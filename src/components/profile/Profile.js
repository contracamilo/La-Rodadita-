import React, { Component } from 'react'
import ProfileUi from './profileUi';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'


class Profile extends Component {
  render() {
      console.log(this.props);
    const { trips, auth,  profiles } = this.props;
    
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
              
              <p>{auth.email}</p>
              <ProfileUi profiles={profiles}/>
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
