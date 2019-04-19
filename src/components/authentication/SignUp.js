import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { signUp } from '../../store/actions/authActions'
import bg from '../../../images/roadtrip.jpg'
import IntroText from '../layout/IntroText';


var bgStyle = {
  width: "100%",
  height: "100%",
  backgroundImage: `url(${bg})`
};

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state);
  }
  render() {
    const { auth, authError } = this.props;
    if(auth.uid) return <Redirect to='/'/>
    return (
       <div className="sign_box" style={bgStyle}>
          <div className="container flex-row">
          <div className="sign_box__info">
             <IntroText />
          </div>
          <div className="sign_box__up">
              <form className="" onSubmit={this.handleSubmit}>
                <h2 className="grey-text text-darken-3">CREA TU CUENTA</h2>
                <div className="input-field">
                  <label htmlFor="email">Correo Electrónico:</label>
                  <input type="email" id='email' onChange={this.handleChange} />
                </div>
                <div className="input-field">
                  <label htmlFor="password">Clave:</label>
                  <input type="password" id='password' onChange={this.handleChange} />
                </div>
                <div className="input-field">
                  <label htmlFor="firstName">Tu Nombre:</label>
                  <input type="text" id='firstName' onChange={this.handleChange} />
                </div>
                <div className="input-field">
                  <label htmlFor="lastName">Tus Apellidos:</label>
                  <input type="text" id='lastName' onChange={this.handleChange} />
                </div>
                <div className="input-field">
                  <button className="btn lighten-1 z-depth-0">CREAR</button>
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
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch)=> {
  return {
    signUp: (creds) => dispatch(signUp(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)

