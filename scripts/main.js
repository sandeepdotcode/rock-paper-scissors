let playerScore = 0;
let computerScore = 0;

// function that makes the computers play
// randomly returns 'rock', 'paper' or 'scissors' 
function computerPlay() {
    let play = ['rock', 'paper', 'scissors'];
    let random = Math.floor(Math.random()*3);
    return play[random];
}

// function to diplay the choices
function showChoice(playerSelection, computerSelection) {
    const playerChoice = document.querySelector('div.player-option');
    const computerChoice = document.querySelector('div.computer-option');

    if (playerSelection == 'scissors') {
        playerChoice.innerHTML = '<span class="fa-rotate-270"><i class="fas fa-hand-scissors fa-flip-horizontal"></i></span>';
    }
    else {
        playerChoice.innerHTML = `<i class="fas fa-hand-${playerSelection}"></i>`
    }

    if (computerSelection == 'scissors') {
        computerChoice.innerHTML = '<i class="fas fa-hand-scissors fa-rotate-90"></i>';
    }
    else {
        computerChoice.innerHTML = `<i class="fas fa-hand-${computerSelection} fa-flip-horizontal"></i>`
    }
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

// function to decide if game is over
function gameOver() {
    if (playerScore === 5 || computerScore === 5)
        return true;
    return false;
}

// function to disable buttons and end the game
function endGame() {
    buttons.forEach(button => button.setAttribute('disabled', ''));
}

// function to show the final winner of the game
function showFinalResult() {
    const status = document.querySelector('.status');

    if (playerScore > computerScore) {
        status.textContent = `You won the game 😀.`;
    }
    else {
        status.textContent = `You lost the game 🙁.`;
    }
}

// button event handling
buttons = document.querySelectorAll('.weapon-button');

buttons.forEach(button => button.addEventListener('click', () => {
    const playerSelection = button.getAttribute('id');
    const computerSelection = computerPlay();
    
    result = playRound(playerSelection, computerSelection);
    showChoice(playerSelection, computerSelection);
    showRoundResult(result, playerSelection, computerSelection);
    
    if (gameOver()) {
        endGame();
        showFinalResult();
    }
}))