import React, { Component } from 'react'
import { connect  } from 'react-redux'
import ProfileUi from './profileUi';



class Profile extends Component {
  render() {
    console.log(this.props)
    const { profiles } = this.props
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
              <ProfileUi profiles={profiles}/>
          </div>
         
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    profiles: state.profile.profiles
  }
}

export default connect(mapStateToProps)(Profile)
