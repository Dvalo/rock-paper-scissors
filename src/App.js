import React, { useState, useEffect } from 'react';
import PlayerPick from './componenets/PlayerPick';
import GenerateResults from './componenets/GenerateResults';
import ComputerPick from './componenets/ComputerPick';
import './App.css';

const choices = ["rock", "paper", "scissors"];

function App() {
  const [playerPick, setPlayerPick] = useState("");
  const [computerPick, setComputerPick] = useState("");
  const [timer, setTimer] = useState(null);
  const [score, setScore] = useState(0);
  const [winner, setWinner] = useState("");

  function getComputerChoice() {
    const randomInt = Math.floor(Math.random() * 3);
    const randomChoice = choices[randomInt];
    let computerChoiceDiv = document.querySelector(`#computer-pick .${randomChoice}`);
    computerChoiceDiv.classList.add("active");
    setComputerPick(randomChoice);
  }

  function playerWins() {
    setWinner("player");
    setScore(score + 1);
  }

  function computerWins() {
    setWinner("computer");
    setScore(score - 1);
  }

  function draw() {
    setWinner("draw");
  }

  function restartGame() {
    setPlayerPick("");
    setComputerPick("");
    setWinner("");
    let elem = document.getElementsByClassName('choice active');
    if(elem.length > 0){
      elem[0].classList.remove('active');
    }
  }

  useEffect(() => {
    if(timer === 0){
      setTimer(null);
      getComputerChoice();
   }
    if (!timer) return;

    const intervalId = setInterval(() => {
      setTimer(timer - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timer]);

  return (
    <div className="game-arena">
      <PlayerPick setPick = {setPlayerPick} playerPick = {playerPick} setTime = {setTimer}/>
      <div className="game-results-wrapper">
        <div className="timer choices">
          <div className="timer-title">Countdown</div>
          <div className="timer-display display">{timer ? timer : 0}</div>  
        </div>
        <GenerateResults playerPick = {playerPick} computerPick = {computerPick}
        winner = {winner} 
        restart = {restartGame} 
        playerWins = {playerWins} 
        computerWins={computerWins} 
        draw={draw} />
        <div className="game-results-scoreboard">
          <div className={"result-box choices " + (score >= 0 ? 'positive' : 'negative')}>
            <div className="result-box-title">Score</div>
            <div className="result-box-display display">{score}</div>
          </div>
        </div>
        
      </div>
      <ComputerPick computerPick = {computerPick}/>
    </div>
  );

}

export default App;
