import React from 'react'
import TripSummary from './TripSummary'
import { Link } from 'react-router-dom'

const TripList = ({trips}) => {
  return (
    <div className="project-list section">  
        { trips && trips.map(trip => {
          return(
            <Link to={'/trip/'+ trip.id}>
               <TripSummary trip={trip} key={trip.id}/>
            </Link>  
          )
        })}
    </div>
  )
}

export default TripList