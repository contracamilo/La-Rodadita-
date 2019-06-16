import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { Link } from 'react-router-dom'
import TripList from '../trips/TripList'
import SearchResults from './SearchResults';

class SearchList extends Component {
  static defaultProps = { 
      trips: [],
      search: "",
      travelType:""
  }

  initalState = {
    search: "",
    date:"",
    travelType:""
  }
 
  state = {
    search: "",
    date:"",
    travelType:""
  }

  renderTrip = trip => {
    const { search } = this.state;
    
    return (
      <SearchResults trip={trip}/>
    );
  }

  handleChange = e => {
    this.setState({ 
      search: e.target.value 
    });
  }

  render() {
    const { trips, auth } = this.props;
    const { search } = this.state;
    const tripList = trips;
 
    console.log( tripList, search);
    
    const filteredTrip = tripList.filter(trip => {
      return  trip.arriveDate.indexOf(search) !== -1;
      
    
    });

    return (
      <div>
        <div className="container">
          <div className="trip-details-top">
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
                      <select id="tripType"  className="browser-default" onChange={this.handleChange}>
                        <option value="" defaultValue>Seleciona Una opción</option>
                        <option value="ida-vuelta">Ida y Vuelta</option>
                        <option value="ida">Solo ida</option>
                      </select>
                    </div>
                  </div>

                  <div className="col s12 m3 l3">
                    <div className="select-field">
                      <label>Destino</label>
                      <select id="tripType"  className="browser-default" onChange={this.handleChange}>
                        <option value="" defaultValue>Seleciona Una opción</option>
                        <option value="ida-vuelta">Bogotá</option>
                        <option value="ida">Neiva</option>
                      </select>
                    </div>
                  </div>

                  <div className="col s12 l9">
                    <p>Selecciona los campos para filtrar tu busqueda.</p> 
                    <div>
                      {filteredTrip.map(trip => {
                        return this.renderTrip(trip);
                      })}
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