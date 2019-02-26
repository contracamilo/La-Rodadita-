import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'

const Navbar = (props) => {
  const {auth, profile} = props
  //console.log(auth)
  const links = auth.uid ? <SignedInLinks  profile={profile}/> : <SignedOutLinks />;
  return (
    <nav className="wrapper">
      <div className="container HeaderCont">
        <div className="item logo">
           <Link to='/' className="logo">LA RODADITA</Link>
        </div>
        <div className="item links">
           { links }
        </div>
      </div>
    </nav>
  )
}


const mapStateToProps = (state) => {
  console.log(state);
  return{
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(Navbar)
