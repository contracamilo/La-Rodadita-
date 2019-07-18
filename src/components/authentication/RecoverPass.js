import React, { Component } from 'react'
import { connect } from 'react-redux'
import { recoverPass } from '../../store/actions/authActions'
import { Redirect, NavLink } from 'react-router-dom'
import bg from '../../../images/roadtrip.jpg'
import { actionCodeSettings  } from '../../config/fbConfig'
import FormErrors from '../layout/FormErrors'


var bgStyle = {
  width: "100%",
  height: "100%",
  backgroundImage: `url(.${bg})`
};


class RecoverPass extends Component {
  
  state = {
    email: '',
    formErrors: {email: ''},
    emailValid: false,
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

    switch (fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' Verifique los datos ingresados';
        break;
      default:
        break;
    }
    this.setState({
      formErrors: fieldValidationErrors,
      emailValid: emailValid,
    }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid:this.state.emailValid});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.recoverPass(this.state.email, actionCodeSettings)
  }
  
  render() {
    const { authError, auth } = this.props;
    if(auth.uid) return <Redirect to='/'/>
    
    return (
      <div className="sign_box" style={bgStyle}>
        <div className="container">
            <div className="row flex-row aling-center">
                <div className="sign_box__info col s12 m7 l7">
                    <h3>Tu contraseña</h3>
                    <p>Deja tu correo y te enviaremos un enlace al correo para re-establecer tu contraseña.</p>
                </div>
                <div className="sign_box__in col s12 m5 l5">
                    <div className="row">

                        <div className="col s12 m12 l12">
                            <form className="" onSubmit={this.handleSubmit}>
                                <h4 className="grey-text text-darken-3">Ingresa el correo: {' '} <br/></h4>
                                <div className="input-field">
                                    <label htmlFor="email">Correo Electrónico:</label>
                                    <input type="email" name="email" id='email' onChange={this.handleChange} />
                                </div>
                                <div className="panel panel-default">
                                  <FormErrors formErrors={this.state.formErrors} />
                                </div>
                                <div className="input-field">
                                   <button type="submit" className="btn mr" disabled={!this.state.formValid}>ENVIAR</button>
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
    authError: state.auth.authError,
    auth: state.firebase.auth,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    recoverPass: (email, actionCodeSettings) => dispatch(recoverPass(email, actionCodeSettings)),
  }
  
}

export default connect(mapStateToProps, mapDispatchToProps)(RecoverPass)