function getComputerChoice() {
    switch (Math.floor(Math.random() * 3) + 1) {
        case 1:
            return 'rock';
        case 2:
            return 'paper';
        case 3:
            return 'scissors';
    }
}

function getHumanChoice() {
    return prompt('Your turn: ');
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    switch (humanChoice.toLowerCase()) {
        case 'rock':
            switch (computerChoice) {
                case 'rock':
                    humanScore++;
                    computerScore++;
                    return "It's a tie!";
                case 'paper':
                    computerScore++;
                    return "You lose! Paper beats Rock";
                case 'scissors':
                    humanScore++;
                    return "You win! Rock beats Scissors";
            }
        case 'paper':
            switch (computerChoice) {
                case 'rock':
                    humanScore++;
                    return "You win! Paper beats Rock";
                case 'paper':
                    computerScore++;
                    humanScore++;
                    return "It's a tie!";
                case 'scissors':
                    computerScore++;
                    return "You lose! Scissors beats Paper";
            }
        case 'scissors':
            switch (computerChoice) {
                case 'rock':
                    computerScore++;
                    return "You lose! Rock beats Scissors";
                case 'paper':
                    humanScore++;
                    return "You win! Scissors beats Paper";
                case 'scissors':
                    computerScore++;
                    humanScore++;
                    return "It's a tie!";
            }
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);