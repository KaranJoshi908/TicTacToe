import React from 'react'
import { Square } from './Square'

export const Board = () => {
  

  return (
    <div id="board-container">
     <div id="board-row">
      <Square/>
      <Square/>
      <Square/>
     </div>
     <div id="board-row">
      <Square/>
      <Square/>
      <Square/>
     </div>
     <div id="board-row">
      <Square/>
      <Square/>
      <Square/>
     </div>
    </div>
  )
}
