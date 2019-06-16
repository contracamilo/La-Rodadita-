import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { deleteTrip } from '../../store/actions/TripActions'
import { compose } from 'redux'
import { Redirect, Link} from 'react-router-dom'
import moment from 'moment'



class TripDetails extends Component {
  
  handleDelete = (e) => {
    e.preventDefault();
    this.props.deleteTrip(this.props.match.params.id)
    this.props.history.push('/')
  }
  
  render() {
      const { trip, auth } = this.props;
      const key = this.props.match.params.id;
      if(!auth.uid) return <Redirect to='/signin'/>
      
      if(trip) {
        return(
            <div className="container section">
              <div className="trip-details">
                <div className="row">
                <div className="card z-depth-0 col l6">
                  <Link to={`/viajes`}>Volver</Link> 
                  <h2>Detalles del Viaje</h2>
                  <div className="card-content">
                    <span className="card-title">{trip.title}</span>
                    <p><b>Fecha del viaje:</b> {trip.arriveDate}</p>
                    <p><b>Fecha del regreso:</b> {trip.returnDate}</p>
                    <p><b>Punto de recogida:</b> {trip.arrivePoint}</p>
                    <p><b>Punto para el retorno:</b> {trip.returnPoint}</p>
                    <p><b>Tiempo estimado:</b> {trip.travelTime}</p>
                    <p><b>Asientos Disponibles:</b> {trip.carSits}</p>
                    <p>{trip.description}</p>
                    {auth.uid === trip.authorId && (
                      <div className="card-buttons">
                        <button className="btn btn-small"  onClick={this.handleDelete}>Eliminar</button>
                        <Link className="btn" to={`/${key}/edit`}>Editar</Link> 
                      </div>
                    )}
                  </div>
                  <div className="card-action grey lighten-4 grey-text">
                    <div>Publicado {trip.authorFirstName} {trip.authorLastName}</div>
                    <div>{moment(trip.createdAt.toDate().toString()).calendar()}</div>
                  </div>
                </div>
                </div>
              </div>
            </div>
        )
      }
      return (
          <div className="container">
              ...loading
          </div>
      )
    
  }
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

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTrip : (uid) => dispatch(deleteTrip(uid))
  }
}


export default compose(
   connect(mapStateToProps, mapDispatchToProps),
   firestoreConnect([
     {
       collection: 'trips'
     }
   ])
)(TripDetails)
