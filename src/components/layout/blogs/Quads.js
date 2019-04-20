import React from 'react' 
import pin from '../../../../images/push-pin.png'

const Quads = ({blg}) => {
  
  
  return (
    <div>
      <div className="img-container">
          <img src={blg.imageUrl} title={blg.titleBlog}/>
          <img className="pin" src={pin} alt="pin point icon"/>
      </div>
      <h4>{blg.titleBlog}</h4>
      <p>{blg.copyBlog}</p>
    </div>
  )
}

export default Quads