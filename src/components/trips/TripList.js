import React from 'react'
import TripSummary from './TripSummary'

const TripList = ({trips}) => {
  return (
    <div className="project-list section">  
        { trips && trips.map(trip => {
          return(  
            <TripSummary trip={trip} key={trip.id}/>
          )
        })}
    </div>
  )
}

export default TripList