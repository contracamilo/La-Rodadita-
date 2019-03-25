import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createTrip } from '../../store/actions/TripActions'
import { Redirect } from 'react-router-dom'

class CreateTrip extends Component {
  state = {
    title: '',
    description: '',
    arriveDate: '',
    returnDate: '',
    arrivePoint: '',
    returnPoint: '',
    travelTime: '',
    carSits: '',
    termsC: '',
    tripType: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createTrip(this.state)
    this.props.history.push('/')
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
        termsC: String(termsC)
    })
  }

            
  render() {
    
    console.log(this.state.termsC);

    const { auth } = this.props
    if(!auth.uid) return <Redirect to='/signin'/>
    return (
      <div className="container ">
         <h5 className="grey-text text-darken-3">Create un nuevo viaje</h5>
        <form className="white flex-row" onSubmit={this.handleSubmit}>

        <div className="first-half">

          <div className="input-field">
            <input type="text" id='title' onChange={this.handleChange} />
            <label htmlFor="title">Titulo</label>
          </div>


         
          <div className="select-field">
          <label>Ida y/o Vuelta</label>
            <select id="tripType"  className="browser-default" onChange={this.handleTrip}>
              <option value="" defaultValue>Seleciona Una opción</option>
              <option value="ida-vuelta">Ida y Vuelta</option>
              <option value="ida">Solo ida</option>
            </select>
          </div>

          <div className="input-field">
            <input id="arriveDate"  type="date" className="datepicker" onChange={this.handleChange}/>
            <label htmlFor="arriveDate">Fecha del Viaje</label>
          </div>

          {
            (this.state.tripType == 'ida-vuelta') ?
            <div className="input-field">
              <input id="returnDate"  type="date" className="datepicker" onChange={this.handleChange}/>
              <label htmlFor="returnDate">Fecha del Regreso</label>
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

        
           <div className="input-field" >
              <label>
                    <input  id="termsC" type="checkbox" value="yes" onChange={this.handleTerms}/>
                    <span>He leido y acepto terminos y condiciones link</span>
              </label>
               
          </div>
 


          <br/> 
          <div className="input-field">
            <button className="btn pink lighten-1">Publicar Viaje</button>
          </div>
        </div>
         
         
          
          

         
        </form>
     
     
     
     
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
      createTrip : (trip) => dispatch(createTrip(trip))
   }
}


export default connect(mapStateToProps ,mapDispatchToProps)(CreateTrip)