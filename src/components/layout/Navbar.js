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
    <nav className="wrapper">
      <div className="container HeaderCont">
        <div className="item logo">
           <Link to='/' className="logo">
              <span>LA RODADITA</span>
              <img src={logo} width={250} alt="LA RODADITA"/>
            </Link>
        </div>
        <div className="item links">
           { links }
        </div>
      </div>
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
