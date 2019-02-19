import React from 'react'

const ProfileSummary = ({profile}) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title ">{profile.title}</span>
        <p>Edad: {profile.edad} </p>
        <p>Bio: {profile.bio} </p>
        <p>Numero de viajes {profile.completedTrips}</p>
        <p>Estrellas: {profile.rate}</p>
        <p>Telefóno: {profile.phone}</p>
        <p>Cedula: {profile.cedula}</p>
        <p>Sexo: {profile.sexo}</p>
        <p>Preferences: {profile.preferences}</p>
        
      </div>
    </div>
  )
}

export default ProfileSummary