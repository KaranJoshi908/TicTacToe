import React from 'react'
import '../CSS/Square.CSS'

export const Square = (props) => {
  return (
    <div 
      className='square-container' 
      style={{color:"wheat"}}
      onClick={props.onClick}
    > 
      {props.value} 
    </div>
  )
}
