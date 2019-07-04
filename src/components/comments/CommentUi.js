import React from 'react'
import moment from 'moment'

export default function CommentUi(props) {

    const { comments, keyTrip } = props;
    
    const filteredComments = comments.filter(com => {
        return  com.tripId.indexOf(keyTrip) !== -1;
    })

    //console.log(comments, keyTrip ,filteredComments);


    return (
        <div className="messages">
            {filteredComments && filteredComments.map(comment => {
                return (
                   <div key={comment.id} className="message">
                   
                        <div className="message__body">
                            {comment.commentBody}
                        </div>
                        <div className="message__head">
                            <p>Creado por: <b>{comment.authorFirstName} {comment.authorLastName} </b>
                                {moment(comment.createdAt.toDate().toString()).calendar()} 
                            </p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
