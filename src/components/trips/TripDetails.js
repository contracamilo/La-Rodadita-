import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

const TripDetails = (props) => {
  const { trip } = props;

  if(trip) {
    return(
        <div className="container section project-details">
          <div className="card z-depth-0">
            <div className="card-content">
              <span className="card-title">{trip.title}</span>
              <p>Fecha del viaje: {trip.arriveDate}</p>
              <p>Fecha del regreso: {trip.returnDate}</p>
              <p>Fecha del regreso: {trip.returnDate}</p>
              <p>Punto de recogida: {trip.arrivePoint}</p>
              <p>Punto para el retorno: {trip.returnPoint}</p>
              <p>Tiempo estimado: {trip.travelTime}</p>
              <p>Asientos Disponibles: {trip.carSits}</p>
              <p>{trip.description}</p>
            </div>
            <div className="card-action grey lighten-4 grey-text">
              <div>Posted by {trip.authorFirstName} {trip.authorLastName}</div>
              <div>2nd September, 2am</div>
            </div>
          </div>
        </div>
    )
  }
  return (
      <div className="container">
          <p>loading...</p>

      </div>
  )
}


const mapStateToProps = (state, ownProps) => {
    console.log(state)
    const id = ownProps.match.params.id;
    const trips = state.firestore.data.trips
    const trip = trips ? trips[id] : null
    return {
       trip
    }
}


export default compose(
   connect(mapStateToProps),
   firestoreConnect([
     {
       collection: 'trips'
     }
   ])
)(TripDetails)
