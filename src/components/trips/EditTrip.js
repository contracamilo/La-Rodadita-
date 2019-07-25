import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { editTrip } from '../../store/actions/TripActions'
import { Redirect, Link } from 'react-router-dom'

class EditTrip extends Component {
  
  state = {
    title: this.props.trip.title,
    description: this.props.trip.description,
    arriveHour: this.props.trip.arriveHour,
    returnHour: this.props.trip.returnHour,
    arriveDate: this.props.trip.arriveDate,
    returnDate: this.props.trip.returnDate,
    arrivePoint: this.props.trip.arrivePoint,
    returnPoint: this.props.trip.returnPoint,
    travelTime: this.props.trip.travelTime,
    carSits: this.props.trip.carSits,
    content: this.props.trip.content,
    description: this.props.trip.description,
    destiny: this.props.trip.destiny,
    finishPoint: this.props.trip.finishPoint,
    termsC: this.props.trip.termsC,
    tripType: this.props.trip.tripType,
    activeTrip: this.props.trip.activeTrip,
    editId:this.props.match.params.id
  }


  componentDidMount(){
    this.setState({
      title: this.props.trip.title,
      description: this.props.trip.description,
      arriveHour: this.props.trip.arriveHour,
      returnHour: this.props.trip.returnHour,
      arriveDate: this.props.trip.arriveDate,
      returnDate: this.props.trip.returnDate,
      arrivePoint: this.props.trip.arrivePoint,
      returnPoint: this.props.trip.returnPoint,
      travelTime: this.props.trip.travelTime,
      carSits: this.props.trip.carSits,
      content: this.props.trip.content,
      description: this.props.trip.description,
      destiny: this.props.trip.destiny,
      finishPoint: this.props.trip.finishPoint,
      termsC: this.props.trip.termsC,
      tripType: this.props.trip.tripType,
      activeTrip: this.props.trip.activeTrip,
      editId:this.props.match.params.id
    })
   
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.editTrip(this.state.editId, this.state)
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
    const { auth } = this.props;
    const key = this.props.match.params.id;
    if(!auth.uid) return <Redirect to='/signin'/>
    return (
      <div className="container">
        <div className="trip-details-top">
            <Link to={`/`}>Volver</Link> 
            <h2>Editar un viaje creado.</h2>
            <div className="row">
              <div className="col s12 l3">
                <div className="adviser">
                  <h4>¿Qué puedes hacer aquí?</h4>
                  <p>Editar detalles de un viaje ya creado.</p>
                </div>
              </div>
              <div className="col s12 l9">
                
                <form className="white flex-row" onSubmit={this.handleSubmit}>
                <input type="hidden" id='activeState' value="true" onSubmit={this.handleChange} value={this.state.activeTrip}/>
                
                <div className="first-half">
                  <div className="select-field">
                    <label>Ida y/o Vuelta</label>
                    <select id="tripType"  className="browser-default" onChange={this.handleTrip} >
                      <option value={this.state.tripType} defaultValue>{this.state.tripType}</option>
                      <option value="ida-vuelta">Ida y Vuelta</option>
                      <option value="ida">Solo ida</option>
                    </select>
                  </div>

                  <div className="select-field">
                    <label htmlFor="title">Titulo</label>
                    <input type="text" id='title' onChange={this.handleChange} value={this.state.title}/>
                   </div>


                  <div className="select-field">
                    <label htmlFor="arriveDate">Fecha del Viaje</label>
                    <input id="arriveDate"  type="date" className="datepicker" onChange={this.handleChange} value={this.state.arriveDate}/>
                   
                  </div>

                  {
                    (this.state.tripType == 'ida-vuelta') ?
                    <div className="select-field">
                      <label htmlFor="returnDate">Fecha del Regreso</label>
                      <input id="returnDate"  type="date" className="datepicker" onChange={this.handleChange} value={this.state.returnDate}/>
                    </div>
                    :
                    ''
                  }

                  <div className="select-field">
                    <label htmlFor="arrivePoint">Punto de Encuentro</label>
                    <input id="arrivePoint"  type="text" onChange={this.handleChange} value={this.state.arrivePoint}/>
                  </div>
                  {
                    (this.state.tripType == 'ida-vuelta') ?
                  <div className="select-field">
                    <label htmlFor="returnPoint">Punto de Encuentro - Vuelta</label>
                    <input id="returnPoint" type="text" onChange={this.handleChange} value={this.state.returnPoint}/>
                   </div>
                  :
                    ''
                  }

                  <div className="select-field">
                    <label htmlFor="travelTime">Tiempo Estimado de Viaje</label>
                    <input id="travelTime" type="text" onChange={this.handleChange} value={this.state.travelTime}/>
                  </div>

                  <div className="select-field padding-bottom-12">
                        <label htmlFor="activeTrip">Estado del viaje</label>
                        <select id="activeTrip" className="browser-default" onChange={this.handleChange}>
                          <option value={this.state.activeTrip} defaultValue>Activo</option>
                          <option value={'abierto'}>Activo</option>
                          <option value={'cerrado'}>Cerrado</option>
                        </select>
                  </div>

                  
                </div>


                <div className="second-half">
                
                  <div className="select-field">
                    <label>Lugares Disponibles</label>
                    <input id="carSits" type="number" max="7" onChange={this.handleChange} value={this.state.carSits}/>
                  </div>

                  <div className="select-field">
                    <label htmlFor="description">Has una pequeña descripción del viaje</label>
                    <textarea id="description" className="materialize-textarea" onChange={this.handleChange} value={this.state.description}></textarea>
                    
                  </div>

                  <div className="select-field">
                    <label htmlFor="arriveHour">Hora del Viaje</label>
                    <input id="arriveHour"  type="text" className="datepicker" onChange={this.handleChange} value={this.state.arriveHour}/>
                   
                  </div>

                  <div className="select-field">
                    <label htmlFor="returnHour">Hora del Regreso</label>
                    <input id="returnHour"  type="text" className="datepicker" onChange={this.handleChange} value={this.state.returnHour}/>
                  </div>

                  <div className="select-field">
                    <label htmlFor="finishPoint">Punto de Llegada</label>
                    <input id="finishPoint"  type="text" className="datepicker" onChange={this.handleChange} value={this.state.finishPoint}/>
                  </div>

                   <label htmlFor="destiny">Destino</label>
                        <select id="destiny" className="browser-default" onChange={this.handleChange}>
                          <option value={this.state.destiny} defaultValue>{this.state.destiny.toUpperCase()}</option>
                          <option value="bogota">Bogotá</option>
                          <option value="neiva">Neiva</option>
                   </select>



                  <div className="">
                    <label htmlFor="content">Escribe detalles o preferencias.</label>
                    <textarea id="content"  placeholder="No fumar, No bebidas alcoholica..."  onChange={this.handleChange} value={this.state.content}></textarea>
                  
                  </div>

                  <br/> 
                  <div className="btn-field">
                    <button className="btn">Finalizar</button>
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



const mapStateToProps = (state, ownProps) => {
   
  const id = ownProps.match.params.id;
  const trips = state.firestore.data.trips
  const trip = trips ? trips[id] : null
  return {
     trip: trip,
     auth: state.firebase.auth
  }
}


export default compose(
  connect(mapStateToProps, { editTrip }),
  firestoreConnect([
    {
      collection: 'trips', limit: 4, orderBy:['createdAt', 'desc']
    }
  ])
)(EditTrip)


