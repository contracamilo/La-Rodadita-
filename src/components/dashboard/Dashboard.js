import React, { Component } from 'react'
import TripList from '../trips/TripList'
import Notifications from './Notifications'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import QuadComments from '../layout/blogs/QuadComments';
import ReasonList from '../layout/reasons/reasonList';
import SearchLayout from '../search/SearchLayout';


class Dashboard extends Component {
  render() {
    const { trips, auth, reasons, blog, notifications } = this.props;
    
    if(!auth.uid) return <Redirect to='/signin'/>
    return (
      <div className="dashboard wrapper">
        <SearchLayout />
        <div className="container">
            <div className="main-quad flex-row">
                <div className="main-quad__trips">
                    <TripList trips={trips}/>
                </div>
                <div className="main-quad__notifications">
                    <Notifications notifications={notifications}/>
                </div>
             </div>
        </div>



        <div className="wrapper reasons">
           <ReasonList reasons={reasons}/>
        </div>
       
        <div className="main-blog">
           <QuadComments blog={blog}/>
        </div>
        
      </div>
    )
  }
}


const mapStateToProps = (state) => {
 
  return {
    trips: state.firestore.ordered.trips,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications,
    blog: state.firestore.ordered.blog,
    reasons:state.firestore.ordered.reasons,
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'trips', limit: 4, orderBy:['createdAt', 'desc'] },
    { collection: 'notifications', limit: 3, orderBy:['time', 'desc'] },
    { collection: 'blog', limit: 4 },
    { collection: 'reasons', limit: 3 }
  ])
)(Dashboard)