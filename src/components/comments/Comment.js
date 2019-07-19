import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import CommentUi from './CommentUi';
import Spinner from '../layout/Spinner'

class Comment extends Component {
  
  state = {
    tripKey:this.props.tripKey
  }


  render() {
    const { comments, tripKey } = this.props;
   
    return (
      <div>
        {comments 
          ? <CommentUi comments={comments} keyTrip={tripKey}/>
          : <Spinner />
        }
      </div>
    )
  }
}


const mapStateToProps = (state) => {
   return {
       comments: state.firestore.ordered.comments
   }
}


export default compose(
   connect(mapStateToProps),
   firestoreConnect([
    { collection: 'comments', orderBy:['createdAt'] }
  ])
)(Comment)

