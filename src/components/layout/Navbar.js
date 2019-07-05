import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'
import logo from '../../../images/la_rodadita.png'

const Navbar = (props) => {
  const {auth, profile} = props
  //console.log(auth)
  const links = auth.uid ? <SignedInLinks  profile={profile}/> : <SignedOutLinks />;
  return (
    <nav className="container HeaderCont">
      <div className="nav-wrapper">
      <Link to='/' className="brand-logo logo">
         <img src={logo} width={250} alt="LA RODADITA"/>
      </Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
          { links }
      </ul>
    </div>
    <ul className="hide-on-med-and-up">
          { links }
    </ul>
  </nav>
  )
}


const mapStateToProps = (state) => {
  return{
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(Navbar)
