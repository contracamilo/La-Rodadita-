import React from 'react'

const Quads = ({blg}) => {
  return (
    <div>
      <div className="img-container">
          <img src={blg.imageUrl} title={blg.titleBlog}/>
      </div>
      <h4>{blg.titleBlog}</h4>
      <p>{blg.copyBlog}</p>
    </div>
  )
}

export default Quads