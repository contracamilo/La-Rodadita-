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
    termsC: ''
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

            
  render() {
    const { auth } = this.props
    if(!auth.uid) return <Redirect to='/signin'/>
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Create un nuevo viaje</h5>
          
          
          <div className="input-field">
            <input type="text" id='title' onChange={this.handleChange} />
            <label htmlFor="title">Titulo</label>
          </div>

          <div className="input-field">
            <textarea id="content"  onChange={this.handleChange}></textarea>
            <label htmlFor="content">Descripción</label>
          </div>
         
          <div className="input-field">
            <input id="arriveDate"  type="date" className="datepicker" onChange={this.handleChange}/>
            <label htmlFor="arriveDate">Fecha del Viaje</label>
          </div>

           <div className="input-field">
            <input id="returnDate"  type="date" className="datepicker" onChange={this.handleChange}/>
            <label htmlFor="returnDate">Fecha del Regreso</label>
          </div>
          
          <div className="input-field">
            <input id="arrivePoint"  type="text" onChange={this.handleChange} />
            <label htmlFor="arrivePoint">Punto de Recogida</label>
          </div>

          <div className="input-field">
            <input id="returnPoint" type="text" onChange={this.handleChange} />
            <label htmlFor="returnPoint">Punto de Retorno</label>
          </div>

           <div className="input-field">
            <input id="travelTime" type="text" onChange={this.handleChange} />
            <label htmlFor="travelTime">Tiempo Estimado de Viaje</label>
          </div>
          
 
          <br/> 
          <div className="input-field">
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

          <br/> 
           <div className="input-field" >
              <label>
                    <input  id="termsC" type="checkbox" onChange={this.handleChange}/>
                    <span>He leido y acepto terminos y condiciones link</span>
              </label>
               
          </div>
 


          <br/> 
          <div className="input-field">
            <button className="btn pink lighten-1">Publicar Viaje</button>
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