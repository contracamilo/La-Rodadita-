import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import moment from 'moment'

const TripDetails = (props) => {
  const { trip, auth } = props;
  if(!auth.uid) return <Redirect to='/signin'/>

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
              <div>{moment(trip.createdAt.toDate().toString()).calendar()}</div>
            </div>
          </div>
        </div>
    )
  }
  return (
      <div className="container">
          <div className="spinner-layer spinner-blue">
            <div className="circle-clipper left">
              <div className="circle"></div>
            </div><div className="gap-patch">
              <div className="circle"></div>
            </div><div className="circle-clipper right">
              <div className="circle"></div>
            </div>
          </div>

      </div>
  )
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
   connect(mapStateToProps),
   firestoreConnect([
     {
       collection: 'trips'
     }
   ])
)(TripDetails)
