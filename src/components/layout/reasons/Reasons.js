import React from 'react'

const Quads = ({reason}) => {
  return (
    <div>
      <div className="img-container">
          <img src={reason.iconUrl} title={reason.titleReason}/>
      </div>
      <h4>{reason.titleReason}</h4>
      <p>{reason.copyReason}</p>
    </div>
  )
}

export default Quads