import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { Link, Redirect } from 'react-router-dom'
import TripList from '../trips/TripList'
import SearchResults from './SearchResults';

class SearchList extends Component {
  static defaultProps = { 
      trips: [],
      search: "",
      travelType:"",
      destiny:""
  }

  initalState = {
    search: "",
    date:"",
    travelType:"",
    destiny:""
  }
 
  state = {
    search: "",
    date:"",
    travelType:"",
    destiny:""
  }

  renderTrip = trip => {
    const { search } = this.state;
    
    return (
      <div key={trip.id} className="main-quad__trips">
        <SearchResults trip={trip}/>
      </div>
    );
  }

  handleChange = e => {
    this.setState({ 
      search: e.target.value 
    });
  }

  handleChangeType = e => {
    this.setState({ 
      travelType:e.target.value 
    });
  }

  handleChangeDestiny = e => {
    this.setState({ 
      destiny:e.target.value 
    });
  }

  render() {
    const { trips, auth } = this.props;
    const { search, travelType } = this.state;
    const tripList = trips;
    
    const filteredTrip = tripList.filter(trip => {
      return trip.arriveDate.indexOf(search) !== -1;
    });

    /*
    const filteredTripType = tripList.filter(trip => {
      return trip.tripType.indexOf(travelType) !== -1;
    });

    const filteredTripDestiny = tripList.filter(trip => {
      return trip.destiny.indexOf(destiny) !== -1;
    });
   */

    if(!auth.uid) return <Redirect to='/signin'/>
    
    return (
      <div>
        <div id="trip-main" className="container">
          <div className="main-quad trip-details-top">
            <div className="row">
              <h2>VIAJES</h2>
              <div className="project-list section"> 
                <div className="row">
                  <div className="col s12 l3">
                    <div className="adviser">
                      <h4>¿Qué puedes hacer aquì?</h4>
                      <p>Encuentra el viaje que se ajuste a tu agenda.</p>
                    </div>
                  </div>

                  <div className="col s12 m3 l3">
                    <div className="select-field">
                      <label htmlFor="search">Fecha</label>
                      <input type="date" id='search' onChange={this.handleChange} value={this.state.search}/>
                    </div>
                  </div>

                  <div className="col s12 m3 l3">
                    <div className="select-field">
                      <label>Ida y/o Vuelta</label>
                      <select id="tripType" disabled={true} className="browser-default" onChange={this.handleChangeType}>
                        <option value="" defaultValue>Seleciona Una opción</option>
                        <option value="ida-vuelta">Ida y Vuelta</option>
                        <option value="ida">Solo ida</option>
                      </select>
                    </div>
                  </div>

                  <div className="col s12 m3 l3">
                    <div className="select-field">
                      <label>Destino</label>
                      <select id="tripDestiny" disabled={true} className="browser-default" onChange={this.handleChangeDestiny}>
                        <option value="" defaultValue>Seleciona Una opción</option>
                        <option value="bogota">Bogotá</option>
                        <option value="neiva">Neiva</option>
                      </select>
                    </div>
                  </div>

                  <div className="col s12 l9">
                    <p>Selecciona los campos para filtrar tu busqueda.</p> 
                      <div>
                        {
                          (filteredTrip) 
                          ? (filteredTrip.map(trip => {return this.renderTrip(trip);}))
                          : <p>...Cargando</p>
                        }
                      </div>
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
  
  return {
    trips: state.firestore.ordered.trips,
    auth: state.firebase.auth,
  }
}


export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'trips',  orderBy:['createdAt', 'desc'] },
    
  ])
)(SearchList)