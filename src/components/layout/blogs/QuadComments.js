import React from 'react'
import Quads from './Quads';


const QuadComments = ({blog}) => {
 
   
  return (
    <div className="container">
        <h2>Lo que dicen los viajeros.</h2>
        <ul className="blog-list section">  
            
            { blog && blog.map(blg => {
                return(
                <li key={blg.id}>
                    <Quads blg={blg}/>
                </li>
                )
            })}
        </ul>
    </div>
  )
}

export default QuadComments

