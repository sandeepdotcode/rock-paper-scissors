// function that makes the computers play
// randomly returns 'rock', 'paper' or 'scissors' 
function computerPlay() {
    let play = ['rock', 'paper', 'scissors'];
    const random = Math.floor(Math.random()*3);
    return play[random];
}

// function to play one round of the game
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    }
    else if ((playerSelection == 'rock' && computerSelection == 'scissors') || (playerSelection == 'scissors' && computerSelection == 'paper') || (playerSelection == 'paper' && computerSelection == 'rock')) {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    }
    else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
  }
  
  const playerSelection = prompt("Rock, Paper, Scissors?").toLowerCase();
  const computerSelection = computerPlay();
  console.log(playRound(playerSelection, computerSelection));