import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn, googleLogin, twitterLogin, facebookLogin } from '../../store/actions/authActions'
import { Redirect, NavLink } from 'react-router-dom'
import bg from '../../../images/roadtrip.jpg'
import IntroText from '../layout/IntroText';
import { getUser } from '../../store/actions/authActions'
import facebook from '../../../images/facebook-logo.png'
import tw from '../../../images/tw.png'
import google from '../../../images/google.png'
import FormErrors from '../layout/FormErrors'

var bgStyle = {
  width: "100%",
  height: "100%",
  backgroundImage: `url(.${bg})`
};


class SignIn extends Component {
  
  state = {
    email: '',
    password: '',
    formErrors: {email: '', password: ''},
    emailValid: false,
    passwordValid: false,
    formValid: false
  }

  

  handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [e.target.name]: value
    }, () => this.validateField(name, value))
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;

    switch (fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' Verifique los datos ingresados';
        break;
      case 'password':
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? '' : 'La contraseña es muy corta';
        break;
      default:
        break;
    }
    this.setState({
      formErrors: fieldValidationErrors,
      emailValid: emailValid,
      passwordValid: passwordValid
    }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.emailValid && this.state.passwordValid});
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
                  <input type="email" name="email" id='email' value={this.state.email} onChange={this.handleChange}/>
                </div>
                <div className="input-field">
                  <label htmlFor="password">Clave:</label>
                  <input type="password" name="password" id='password'   value={this.state.password} onChange={this.handleChange} />
                </div>
                <div className="panel panel-default">
                  <FormErrors formErrors={this.state.formErrors} />
                </div>
                <div className="input-field">
                  <button type="submit" className="btn mr" disabled={!this.state.formValid}>INGRESA</button>
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
                  <button className="btn mr" onClick={(e) => this.props.googleLogin(e)}><img src={google} width={20} alt="google"/></button>
                </div>

                <div className="col s12 m4 l4">
                  <button className="btn mr" onClick={(e) => this.props.facebookLogin(e)}><img src={facebook} width={17} alt="facebok"/></button>
                </div>
                <div className="col s12 m4 l4">
                  <button className="btn mr" onClick={(e) => this.props.twitterLogin(e)}><img src={tw} width={20} alt="tw"/></button>
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
