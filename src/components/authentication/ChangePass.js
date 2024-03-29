import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changePass } from '../../store/actions/authActions'
import { Redirect, NavLink } from 'react-router-dom'
import bg from '../../../images/roadtrip.jpg'
import { actionCodeSettings  } from '../../config/fbConfig'


var bgStyle = {
  width: "100%",
  height: "100%",
  backgroundImage: `url(.${bg})`
};


class ChangePass extends Component {
  
  state = {
    password: '',
    passwordverify:''
  }


  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.changePass(this.state.password)
  }
  
  render() {
    const { authError, auth } = this.props;
    if(auth.uid) return <Redirect to='/'/>
    
    return (
    <div className="sign_box" style={bgStyle}>
        <div className="container">
            <div className="row flex-row aling-center">
                <div className="sign_box__info col s12 m7 l7">
                  <h3>Cambia la contraseña</h3>
                  <p>Digita tu nueva contraseña.</p>
                </div>
                <div className="sign_box__in col s12 m5 l5">
                    <div className="row">

                        <div className="col s12 m12 l12">
                        <form className="" onSubmit={this.handleSubmit}>
                            <h4 className="grey-text text-darken-3">Ingresa tu nueva contraseña:</h4>
                            <div className="input-field">
                              <label htmlFor="password">Contraseña:</label>
                              <input type="password" id='password' required onChange={this.handleChange} />
                            </div>

                            <div className="input-field">
                              <label htmlFor="passwordverify">Verifica tu nueva Contraseña:</label>
                              <input type="password" id='passwordverify' onChange={this.handleChange} />
                            </div>

                            <div className="input-field">
                              {( 
                                this.state.password == this.state.passwordverify 
                                ? <button className="btn mr">Cambiar</button>
                                : <div>
                                    <p>Las contraseñas deben coincidir</p>
                                    <button disabled className="btn mr">Cambiar</button>
                                  </div> 
                              
                              )}
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
    changePass: (password) => dispatch(changePass(password)),
  }
  
}

export default connect(mapStateToProps, mapDispatchToProps)(ChangePass)