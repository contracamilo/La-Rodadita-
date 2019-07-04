import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import CommentUi from './CommentUi';


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
          : <p>..loading</p>
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

