import React from 'react'
import moment from 'moment'
import carIcon from '../../../images/car_icon.png'

const TripSummary = ({trip}) => {

  return (
    <div className="trip-card">
      <div className="flex-row">
        <div className="item car_icon">
          <img src={carIcon} alt="Car Icon"/>
        </div>
        <div className="item trip_type">
          {
            (trip.tripType == 'solo') ?
              <p>SOlO IDA</p>
            :
              <p>IDA Y VUELTA</p> 
          }
          
        </div>
        <div className="item trip_date">
          <span>Fecha de Salida: </span>{trip.arriveDate}
        </div>
        <div className="item car_sits">
           <span>Asientos:</span> {trip.carSits}
        </div>
        <div className="item trip_time"><span>Destino:</span>{trip.destiny == "neiva" && "BOG ➡ NEI"}{trip.destiny == "bogota" && "NEI ➡ BOG"}</div>
       
       <div className="item trip_active">
         { (trip.activeTrip == true || trip.activeTrip == 'abierto') ?
           <div>Activo <span className="green"></span></div>
          :
           <div>Cerrado<span className="red"></span></div>
         }
       </div>
        
      </div>
      <div className="flex-row trip-signature">
        <div>
          <span>Creado por: <b>{trip.authorFirstName} {trip.authorLastName}</b></span>
          <span>Fecha:  <b>{moment(trip.createdAt.toDate().toString()).calendar()}</b></span>
        </div>
        <div className="line-btn"><b>VER MÁS +</b></div>
      </div>
    </div>
  )
}

export default TripSummary