import React, { Component } from 'react'
import TripList from '../trips/TripList'
import Notifications from './Notifications'
import { connect  } from 'react-redux'

class Dashboard extends Component {
  render() {
    console.log(this.props)
    const { trips } = this.props
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <TripList trips={trips}/>
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications />
          </div>
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    trips: state.trip.trips
  }
}

export default connect(mapStateToProps)(Dashboard)