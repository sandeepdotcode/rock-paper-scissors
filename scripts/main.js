let playerScore = 0;
let computerScore = 0;

let playerSelection;
let computerSelection;

// function to get player choice and computer choice
function getInputs() {
    playerSelection = prompt("Rock, Paper, Scissors?").toLowerCase();
    computerSelection = computerPlay();
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
        showRoundResult("It's a tie!");
        return 'tie';
    }
    else if (
        (playerSelection == 'rock' && computerSelection == 'scissors') || 
        (playerSelection == 'scissors' && computerSelection == 'paper') || 
        (playerSelection == 'paper' && computerSelection == 'rock')) {

        return 'win';
    }
    else {
        return 'lose';
    }
  }
 
// function to display the result of a round
function showRoundResult(roundMessage) {
    console.log(roundMessage.concat(` Current score: ${playerScore} - ${computerScore}`));
}

// function to play a five round game
function game() {
    while (playerScore < 3 && computerScore < 3) {
        getInputs();
        result = playRound(playerSelection, computerSelection);
        if (result == 'win') {
            playerScore++;
            showRoundResult(`You win! ${playerSelection} beats ${computerSelection}.`);
        }
        else if (result == 'lose') {
            computerScore++;
            showRoundResult(`You Lose! ${computerSelection} beats ${playerSelection}.`);
        }
    }

    showFinalResult();
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

//game();