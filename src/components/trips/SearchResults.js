import React from 'react'
import { Link } from 'react-router-dom'
import TripSummary from './TripSummary'

const SearchResults = ({trip}) => {
  console.log('comp', trip);
  return (
    <div>
      <Link to={'/trip/'+ trip.id} key={trip.id}>
        <TripSummary trip={trip} />
      </Link>  
    </div>
  )
}

export default SearchResults
