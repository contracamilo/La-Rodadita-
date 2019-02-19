import React from 'react'

const TripSummary = ({trip}) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title ">{trip.title}</span>
        <p>Numero de asientos {trip.carSits}</p>
        <p>Fecha de Salida: {trip.arriveDate}</p>
        <p>Posted by Fulero Connor</p>
        <p className="grey-text">3rd September, 2am</p>
      </div>
    </div>
  )
}

export default TripSummary