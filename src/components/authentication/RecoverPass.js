import React, { Component } from 'react'
import { connect } from 'react-redux'
import { recoverPass } from '../../store/actions/authActions'
import { Redirect, NavLink } from 'react-router-dom'
import bg from '../../../images/roadtrip.jpg'
import { actionCodeSettings  } from '../../config/fbConfig'


var bgStyle = {
  width: "100%",
  height: "100%",
  backgroundImage: `url(.${bg})`
};


class RecoverPass extends Component {
  
  state = {
    email: '',
  }


  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
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
                                <h4 className="grey-text text-darken-3">Ingresa el correo:</h4>
                                <div className="input-field">
                                    <label htmlFor="email">Correo Electrónico:</label>
                                    <input type="email" id='email' onChange={this.handleChange} />
                                </div>

                                <div className="input-field">
                                    <button className="btn mr">enviar</button>
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