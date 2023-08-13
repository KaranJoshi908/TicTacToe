import React, { useState } from 'react'
import { Square } from './Square'
import '../CSS/Board.CSS'

export const Board = () => {
  const [gameState , setGameState] = useState(Array(9).fill(null));
  const [isXTurn , setIsXTurn] = useState(true);

  const handleSquareClicked = (index) => {
    const copiedGameState = [...gameState]
    if(copiedGameState[index] ===null)
    {
      copiedGameState[index] = isXTurn ? 'X' : 'O'
      setGameState(copiedGameState);
      setIsXTurn(!isXTurn);
    }
  }

  const checkForWin = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (gameState[a] !== null && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
        return {
          isGameDraw : false,
          isWinner : true,
          winner : gameState[a]
        };
      }
    }

    let isGameDraw = true;
    
    for (let i = 0; i < gameState.length; i++) {
      if (gameState[i] === null) {
        isGameDraw = false;
        break;
      }
    }

    if(isGameDraw){
      return {
        isGameDraw : true,
        isWinner : false,
        winner : null
      }
    }

    return {
      isGameDraw : false,
      isWinner : false,
      winner : null
    };
  }

  const handleReset = () => {
    setGameState(Array(9).fill(null));
    setIsXTurn(true);
  };

  const isWinner = checkForWin();

  return (
    <div className="board-container">
     {isWinner.isGameDraw || isWinner.isWinner ? (
      isWinner.isGameDraw ? (
      <>
      <h1 style = {{color: "wheat"}}>Match Draw !!</h1>
       <button onClick={handleReset}>Play Again</button>
      </>
      ) : (
     <>
       <h1 style = {{color: "wheat"}}>{isWinner.winner} won the game {" "}</h1>
       <button onClick={handleReset}>Play Again</button>
     </>
      )
     ) : (       
     <>
     <h1>Player {isXTurn ? 'X' :'O'} Turn!!</h1>
     <div className='board-row'>
      <Square onClick = {() => handleSquareClicked(0)} value={gameState[0]}/>
      <Square onClick = {() => handleSquareClicked(1)} value={gameState[1]}/>
      <Square onClick = {() => handleSquareClicked(2)} value={gameState[2]}/>
     </div>
     <div className='board-row'>
      <Square onClick = {() => handleSquareClicked(3)} value={gameState[3]}/>
      <Square onClick = {() => handleSquareClicked(4)} value={gameState[4]}/>
      <Square onClick = {() => handleSquareClicked(5)} value={gameState[5]}/>
     </div>
     <div className='board-row'>
      <Square onClick = {() => handleSquareClicked(6)} value={gameState[6]}/>
      <Square onClick = {() => handleSquareClicked(7)} value={gameState[7]}/>
      <Square onClick = {() => handleSquareClicked(8)} value={gameState[8]}/>
     </div>
     </>
     )}
    </div>
  );
}
