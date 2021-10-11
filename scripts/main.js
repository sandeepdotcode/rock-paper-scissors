let playerScore = 0;
let computerScore = 0;

// function to get player choice and computer choice
function getInputs() {
    playerSelection = prompt("Rock, Paper, Scissors?").toLowerCase();
    
}

// function that makes the computers play
// randomly returns 'rock', 'paper' or 'scissors' 
function computerPlay() {
    let play = ['rock', 'paper', 'scissors'];
    let random = Math.floor(Math.random()*3);
    return play[random];
}

// function to play one round of the game
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {  
        return 'tie';
    }
    else if (
        (playerSelection == 'rock' && computerSelection == 'scissors') || 
        (playerSelection == 'scissors' && computerSelection == 'paper') || 
        (playerSelection == 'paper' && computerSelection == 'rock')) {
        
        playerScore++;
        return 'win';
    }
    else {
        computerScore++;
        return 'lose';
    }
  }
 
// function to display the result of a round
function showRoundResult(result, playerSelection, computerSelection) {
    let roundMessage;
    if (result == 'win') {
        roundMessage = `You win! ${playerSelection} beats ${computerSelection}.`;
    }
    else if (result == 'lose') {
        roundMessage = `You Lose! ${computerSelection} beats ${playerSelection}.`;
    }
    else if(result == 'tie') {
        roundMessage =  "It's a tie!";
    }

    const status = document.querySelector('.status');
    status.textContent = roundMessage;

    const playerScoreDisp = document.querySelector('.player-score');
    const computerScoreDisp = document.querySelector('.computer-score');
    playerScoreDisp.textContent = playerScore;
    computerScoreDisp.textContent = computerScore;
}

// function to show the final winner of the game
function showFinalResult() {
    if (playerScore > computerScore) {
        console.log(`You won 😀. The score is 3 - ${computerScore}`);
    }
    else {
        console.log(`You lost 🙁. The score is ${playerScore} - 3`);
    }
}

buttons = document.querySelectorAll('.weapon-button');

buttons.forEach(button => button.addEventListener('click', function(e) {
    const playerSelection = button.getAttribute('id');
    const computerSelection = computerPlay();
    
    result = playRound(playerSelection, computerSelection);
    showRoundResult(result, playerSelection, computerSelection);
    
}))