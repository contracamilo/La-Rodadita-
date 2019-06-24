import React from 'react'
import moment from 'moment'

export default function CommentUi({comments}) {
    return (
        <div className="messages">
            {comments && comments.map(comment => {
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
