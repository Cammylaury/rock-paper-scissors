console.log("Hello World!");

const options = ["rock", "paper", "scissors"]
const playerSelection = "rock"
const computerSelection = getComputerChoice()
function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * options.length)]
    return choice;
}
getComputerChoice()

function checkWinner(playerSelection, comuterSelection) {
    if (playerSelection == computerSelection) {
        return "It's a tie!";
    }

    else if(
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")
    ){
        return "Player";
    }
    else {
        return "Computer";
    }
}
function playRound(playerSelection, computerSelection) {
    const result = checkWinner(playerSelection, computerSelection);
    if (result == "Tie"){
        return "It's a tie!"
    }
    else if (result == "Plater"){
        return `You Win! ${playerSelection} beats ${computerSelection}`
    }
    else {
        return `You lose! ${computerSelection} beats ${playerSelection}`
    }
}

console.log(playRound(playerSelection, computerSelection));