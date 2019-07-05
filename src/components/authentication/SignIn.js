import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn, googleLogin, twitterLogin, facebookLogin } from '../../store/actions/authActions'
import { Redirect, NavLink } from 'react-router-dom'
import bg from '../../../images/roadtrip.jpg'
import IntroText from '../layout/IntroText';
import { getUser } from '../../store/actions/authActions'

var bgStyle = {
  width: "100%",
  height: "100%",
  backgroundImage: `url(.${bg})`
};


class SignIn extends Component {
  
  state = {
    email: '',
    password: ''
  }


  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state)
  }
  render() {
    const { authError, auth } = this.props;
    console.log(this.props);
    if(auth.uid) return <Redirect to='/'/>
    
    return (
      <div className="sign_box" style={bgStyle}>
        <div className="container">
          
          <div className="row flex-row aling-center">
          
          <div className="sign_box__info col s12 m7 l7">
             <IntroText />
          </div>
          <div className="sign_box__in col s12 m5 l5">
            <div className="row">
            
            <div className="col s12 m12 l12">
              <form className="" onSubmit={this.handleSubmit}>
                <h2 className="grey-text text-darken-3">Ingresa</h2>
                <div className="input-field">
                  <label htmlFor="email">Correo Electrónico:</label>
                  <input type="email" id='email' onChange={this.handleChange} />
                </div>
                <div className="input-field">
                  <label htmlFor="password">Clave:</label>
                  <input type="password" id='password' onChange={this.handleChange} />
                </div>
                <div className="input-field">
                  <button className="btn mr">INGRESA</button>
                  <div className="center red-text">
                    { authError ? <p>{authError}</p> : null }
                    
                  </div>
                  <div className="recover">
                    <NavLink to='/recuperar-contraseña'>Olvidaste tu contraseña</NavLink> 
                  </div>
                </div>
              </form>
              <p>Ingresa con tu red social favorita</p>
            </div>
            
            <div className="sign_box__social">
                <div className="col s12 m4 l4">
                  <button className="btn mr" onClick={(e) => this.props.googleLogin(e)}> Google</button>
                </div>
                <div className="col s12 m4 l4">
                  <button className="btn mr" onClick={(e) => this.props.twitterLogin(e)}>Twitter</button>
                </div>
                <div className="col s12 m4 l4">
                  <button className="btn mr" onClick={(e) => this.props.facebookLogin(e)}>Facebook</button>
                </div>
            </div>
            
            </div>
          
          </div>
       
          </div>
       
       </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    authError: state.auth.authError,
    auth: state.firebase.auth,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds)),
    googleLogin,
    twitterLogin,
    facebookLogin
  }
  
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
