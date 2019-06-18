import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateProfile } from '../../store/actions/profileActions'
import { Redirect } from 'react-router-dom'

class CreateProfile extends Component {
  state = {
    title: '',
    destiny: '',
    description: '',
    arriveDate: '',
    returnDate: '',
    arriveHour: '',
    returnHour: '',
    arrivePoint: '',
    returnPoint: '',
    travelTime: '',
    carSits: '',
    termsC: '',
    tripType: '',
    activeTrip: true,
    disableButton:true
  }



  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.updateProfile(this.state)
    this.props.history.push('/profile')
  }

  handleTrip = (e) => {
    e.preventDefault();
    const hideTrip = document.getElementById('tripType').value
    this.setState({
        tripType: String(hideTrip)
    })
  }

  handleTerms = (e) => {
    const termsC = document.getElementById('termsC').value
    this.setState({
        termsC: String(termsC),
        disableButton:false,
    })
  }


            
  render() {
    
    const { auth } = this.props
    console.log(this.props);
    if(!auth.uid) return <Redirect to='/signin'/>
    return (
      <div className="container">
        <div className="trip-details-top">
            <h2>Actualiza tu perfil.</h2>
            <div className="row">
              <div className="col s12 l3">
                <div className="adviser">
                  <h4>¿Qué puedes hacer aquì?</h4>
                  <p>Es necesario que completes tu perfil para que otros viajeros esten confiados para viajar contigo.</p>
                </div>
              </div>
              <div className="col s12 l9">
                
                <form className="white flex-row" onSubmit={this.handleSubmit}>
                <input type="hidden" id='activeState' value="true" onSubmit={this.handleChange} />

                <div className="first-half">
                  <div className="select-field">
                    <label htmlFor="tripDestiny">Destino</label>
                      <select id="destiny"  className="browser-default" onChange={this.handleChange}>
                        <option value="" defaultValue>Seleciona Una opción</option>
                        <option value="Bogotá">Bogotá</option>
                        <option value="Neiva">Neiva</option>
                      </select>
                  </div>



                  <div className="input-field">
                    <input type="text" id='title' onChange={this.handleChange} />
                    <label htmlFor="title">Titulo</label>
                  </div>

                  <div className="flex-row flow-fields">
                    <div className="select-field item date">
                      <label htmlFor="arriveDate">Fecha del Viaje</label>
                      <input id="arriveDate"  type="date" className="datepicker" onChange={this.handleChange}/>
                    </div>

                    <div className="input-field item hour">
                      <input id="arriveHour"  type="text" className="datepicker" onChange={this.handleChange}/>
                      <label htmlFor="arriveHour">Hora de Salida</label>
                    </div>
                  </div>
                  {
                    (this.state.tripType == 'ida-vuelta') ?
                      <div className="flex-row flow-fields">
                        <div className="select-field item date">
                          <label htmlFor="returnDate">Fecha del Regreso</label>
                          <input id="returnDate"  type="date" className="datepicker" onChange={this.handleChange}/>
                        </div>
                        <div className="input-field item hour">
                          <input id="returnHour"  type="text" className="datepicker" onChange={this.handleChange}/>
                          <label htmlFor="returnHour">Hora del Regreso</label>
                        </div>
                      </div>
                    :
                    ''
                  }

                  <div className="input-field">
                    <input id="arrivePoint"  type="text" onChange={this.handleChange} />
                    <label htmlFor="arrivePoint">Punto de Encuentro</label>
                  </div>
                  {
                    (this.state.tripType == 'ida-vuelta') ?
                  <div className="input-field">
                    <input id="returnPoint" type="text" onChange={this.handleChange} />
                    <label htmlFor="returnPoint">Punto de Encuentro - Vuelta</label>
                  </div>
                  :
                    ''
                  }

                  <div className="input-field">
                    <input id="travelTime" type="text" onChange={this.handleChange} />
                    <label htmlFor="travelTime">Tiempo Estimado de Viaje</label>
                  </div>
              </div>


              <div className="second-half">
                
                <div className="select-field">
                    <label>Ida y/o Vuelta</label>
                    <select id="tripType"  className="browser-default" onChange={this.handleTrip}>
                      <option value="" defaultValue>Seleciona Una opción</option>
                      <option value="ida-vuelta">Ida y Vuelta</option>
                      <option value="ida">Solo ida</option>
                    </select>
                </div>
                
                <div className="select-field">
                  <label>Lugares Disponibles</label>
                    <select id="carSits"  className="browser-default" onChange={this.handleChange}>
                      <option value="" disabled defaultValue>Escoge el numero de sillas que necesitas</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                    </select>
                  </div>

                  <div className="input-field">
                    <textarea id="description" className="materialize-textarea" onChange={this.handleChange}></textarea>
                    <label htmlFor="description">Has una pequeña descripción del viaje</label>
                  </div>

                  <div className="">
                    <label htmlFor="content">Escribe detalles o preferencias.</label>
                    <textarea id="content"  placeholder="No fumar, No bebidas alcoholica..."  onChange={this.handleChange}></textarea>
                  
                  </div>

                
                  <div className="check-field" >
                      <label>
                            <input  id="termsC" type="checkbox" value="yes" onChange={this.handleTerms}/>
                            <span>He leido y acepto terminos y condiciones link</span>
                      </label>
                      
                  </div>
        
                  <br/> 
                  <div className="btn-field">
                    <button className="btn" disabled={this.state.disableButton}>Publicar Viaje</button>
                  </div>
                </div>
                
                </form>
              </div>
            

            </div>
        </div>
     </div>
    )
  }
}



const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
   return {
        updateProfile : (profile) => dispatch(updateProfile(profile))
   }
}


export default connect(mapStateToProps ,mapDispatchToProps)(CreateProfile)