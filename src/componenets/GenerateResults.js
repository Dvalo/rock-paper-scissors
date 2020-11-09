import React, { useEffect } from 'react';

function GenerateResults(props) {
    const playerPick = props.playerPick;
    const computerPick = props.computerPick;
  
    useEffect(() => {
      if (playerPick === "paper" && computerPick === "rock") {
        props.playerWins();
      } else if (playerPick === "paper" && computerPick === "scissors") {
        props.computerWins();
      } else if (playerPick === "scissors" && computerPick === "paper") {
        props.playerWins();
      } else if (playerPick === "scissors" && computerPick === "rock") {
        props.computerWins();
      } else if (playerPick === "rock" && computerPick === "paper") {
        props.computerWins();
      } else if (playerPick === "rock" && computerPick === "scissors") {
        props.playerWins();
      } else {
        props.draw();
      }
    }, [computerPick]);
  
    if (playerPick && computerPick) {
      return (
        <div className="game-results">
          <div className="game-results-info">
            <div className="result-display display">
              {props.winner === "draw" ? "Draw" : props.winner + " Wins"}          
            </div>
            <button type="button" onClick={props.restart}>New Game</button>
          </div>
        </div>
      )
    } else {
      return <div />
    }
    
}

export default GenerateResults;