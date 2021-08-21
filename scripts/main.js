// function that makes the computers play
// randomly returns 'rock', 'paper' or 'scissors' 
function computerPlay() {
    let play = ['rock', 'paper', 'scissors'];
    const random = Math.floor(Math.random()*3);
    return play[random];
}

let output = computerPlay();
console.log(output);