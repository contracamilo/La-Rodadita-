import React from 'react'
import Reasons from './Reasons';


const ReasonList = ({reasons}) => {
  return (
    <div className="container">
        <h2>Viaja con la Rodadita!</h2>
        <ul className="reasons-list section">  
            
            { reasons && reasons.map(reason => {
                return(
                <li key={reason.id}>
                    <Reasons reason={reason}/>
                </li>
                )
            })}
        </ul>
    </div>
  )
}

export default ReasonList