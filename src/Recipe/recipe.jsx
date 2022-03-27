import React from 'react'
import './recipe.css'

export default function Recipe({recipe}) {
  return (
    recipe['recipe']['image'].match(/\.(jpeg|jpg|gif|png)$/)
    != null &&( 
    <div>
      <img className='rec_img' src={recipe['recipe']['image']}/>
      <p className="rec_name">{recipe['recipe']['label']}</p>
    </div>
    )
  )
}
