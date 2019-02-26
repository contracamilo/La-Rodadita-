import React from 'react'
import moment from 'moment'

const TripSummary = ({trip}) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <div className="card-title ">{trip.title}</div>
        <div>Numero de asientos {trip.carSits}</div>
        <div>Fecha de Salida </div>
        <div>Posted by {trip.authorFirstName} {trip.authorLastName} </div>
        <div> date: {moment(trip.createdAt.toDate().toString()).calendar()} </div>
      </div>
    </div>
  )
}

export default TripSummary