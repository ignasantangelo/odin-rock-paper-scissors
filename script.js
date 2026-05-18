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
    const choose = document.getElementById("choose");
    choose.textContent = `You chose ${humanChoice.charAt(0).toUpperCase() +  
        humanChoice.slice(1)}, the computer chose 
        ${computerChoice.charAt(0).toUpperCase() +  computerChoice.slice(1)}`

    const whoWon = document.getElementById("who-won");

    switch (humanChoice) {
        case 'rock':
            switch (computerChoice) {
                case 'rock':
                    whoWon.textContent = "It's a tie!";
                    break;
                case 'paper':
                    computerScore++;
                    whoWon.textContent = "You lose! Paper beats Rock";
                    break;
                case 'scissors':
                    humanScore++;
                    whoWon.textContent = "You win! Rock beats Scissors";
                    break;
            }
            break;
        case 'paper':
            switch (computerChoice) {
                case 'rock':
                    humanScore++;
                    whoWon.textContent = "You win! Paper beats Rock";
                    break;
                case 'paper':
                    whoWon.textContent = "It's a tie!";
                    break;
                case 'scissors':
                    computerScore++;
                    whoWon.textContent = "You lose! Scissors beats Paper";
                    break;
            }
            break;
        case 'scissors':
            switch (computerChoice) {
                case 'rock':
                    computerScore++;
                    whoWon.textContent = "You lose! Rock beats Scissors";
                    break;
                case 'paper':
                    humanScore++;
                    whoWon.textContent = "You win! Scissors beats Paper";
                    break;
                case 'scissors':
                    whoWon.textContent = "It's a tie!";
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