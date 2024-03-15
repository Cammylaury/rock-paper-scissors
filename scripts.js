console.log("Hello World!");

const options = ["rock", "paper", "scissors"]
const playerSelection = "scissors"
const computerSelection = getComputerChoice()
function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * options.length)]
    return choice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!"
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors' ) ||
        (playerSelection === 'scissors' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'rock')
    ) {
        return "Player wins!"
    } else {
        return "You Lose! The computer won!"
    }
}

let result = playRound(computerSelection, computerSelection);

console.log(result);