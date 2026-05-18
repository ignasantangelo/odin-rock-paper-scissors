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

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    switch (humanChoice) {
        case 'rock':
            switch (computerChoice) {
                case 'rock':
                    console.log("It's a tie!");
                    break;
                case 'paper':
                    computerScore++;
                    console.log("You lose! Paper beats Rock");
                    break;
                case 'scissors':
                    humanScore++;
                    console.log("You win! Rock beats Scissors");
                    break;
            }
            break;
        case 'paper':
            switch (computerChoice) {
                case 'rock':
                    humanScore++;
                    console.log("You win! Paper beats Rock");
                    break;
                case 'paper':
                    console.log("It's a tie!");
                    break;
                case 'scissors':
                    computerScore++;
                    console.log("You lose! Scissors beats Paper");
                    break;
            }
            break;
        case 'scissors':
            switch (computerChoice) {
                case 'rock':
                    computerScore++;
                    console.log("You lose! Rock beats Scissors");
                    break;
                case 'paper':
                    humanScore++;
                    console.log("You win! Scissors beats Paper");
                    break;
                case 'scissors':
                    console.log("It's a tie!");
                    break;
            }
            break;
        }
}

const buttons = document.querySelectorAll('button');

    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            const humanChoice = button.id;
            const computerChoice = getComputerChoice();
            playRound(humanChoice, computerChoice);
        })
    })