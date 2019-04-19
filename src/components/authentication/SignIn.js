import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom'
import bg from '../../../images/roadtrip.jpg'
import IntroText from '../layout/IntroText';


var bgStyle = {
  width: "100%",
  height: "100%",
  backgroundImage: `url(${bg})`
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
    if(auth.uid) return <Redirect to='/'/>
    return (
      <div className="sign_box" style={bgStyle}>
        <div className="container flex-row">
          <div className="sign_box__info">
             <IntroText />
          </div>
          <div className="sign_box__in">
            
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
                <button className="btn  lighten-1 z-depth-0">INGRESA</button>
                <div className="center red-text">
                  { authError ? <p>{authError}</p> : null }
                </div>
              </div>
            </form>
          </div>
       
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)