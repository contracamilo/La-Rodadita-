import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { signUp, sendVerification } from '../../store/actions/authActions'
import bg from '../../../images/roadtrip.jpg'
import IntroText from '../layout/IntroText';
import FormErrors from '../layout/FormErrors'


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
    formErrors: {email: '', password: '', firstName: '', lastName: ''},
    emailValid: false,
    firstNameValid:false,
    lastNameValid:false,
    passwordValid: false,
    formValid: false
  }

  handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]: value
    }, () => this.validateField(name, value))
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;
    let firstNameValid = this.state.firstNameValid;
    let lastNameValid = this.state.lastNameValid;

    switch (fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' Verifique los datos ingresados';
        break;
      case 'password':
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? '' : 'La contraseña es muy corta';
        break;
      case 'firstName':
        firstNameValid = value.length != 0;
        fieldValidationErrors.firstName = firstNameValid ? '' : 'No puede estar Vacio';
        break;
      case 'lastName':
        lastNameValid = value.length != 0;
        fieldValidationErrors.lastName = lastNameValid ? '' : 'No puede estar Vacio';
        break;
      default:
        break;
    }
    this.setState({
      formErrors: fieldValidationErrors,
      emailValid: emailValid,
      passwordValid: passwordValid,
      firstNameValid:firstNameValid,
      lastNameValid:lastNameValid
    }, this.validateForm);
  }

  validateForm() {
    const {emailValid, passwordValid, firstNameValid, lastNameValid } = this.state;
    this.setState({formValid: emailValid && passwordValid && firstNameValid && lastNameValid});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state);
    
  }

  componentWillUnmount() {
      this.props.sendVerification(this.state.email);
  }

  render() {
    const { auth, authError } = this.props;
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
                <h2 className="grey-text text-darken-3">Crea Tu Cuenta</h2>
                <div className="input-field">
                  <label htmlFor="email">Correo Electrónico:</label>
                  <input type="email" name="email" id='email' onChange={this.handleChange} />
                </div>
                <div className="input-field">
                  <label htmlFor="password">Clave:</label>
                  <input type="password" name="password" id='password' onChange={this.handleChange} />
                </div>
                <div className="input-field">
                  <label htmlFor="firstName">Tu Nombre:</label>
                  <input type="text" name="firstName" id='firstName' onChange={this.handleChange} />
                </div>
                <div className="input-field">
                  <label htmlFor="lastName">Tus Apellidos:</label>
                  <input type="text" name="lastName" id='lastName' onChange={this.handleChange} />
                </div>
                <div className="panel panel-default">
                  <FormErrors formErrors={this.state.formErrors} />
                </div>
                <div className="input-field">
                  <button type="submit" className="btn mr" disabled={!this.state.formValid}>CREA TU CUENTA</button>
                  <div className="center red-text">
                    { authError ? <p>{authError}</p> : null }
                  </div>
                </div>
              </form>
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
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch)=> {
  return {
    signUp: (creds) => dispatch(signUp(creds)),
    sendVerification: (email) => dispatch(sendVerification(email))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)

