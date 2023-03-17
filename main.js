// function getComputerChoise returns the computer's selction
// either "Rock," "Paper," or "Scissors"
const getComputerChoice = () =>  {
    const randomNumber = Math.floor(Math.random() * 3)
    let selection;

    switch (randomNumber) {
        case 0:
            selection = 'Rock';
            break;
        case 1:
            selection = 'Paper';
            break;
        case 2:
            selection = 'Scissors';
            break 
    }

    return selection
}

const getPlayerChoice = () => {
    return prompt('Enter Rock, Paper, or Scissors')
}


// function evaluateRount compares the player's selection and the computer's
// and declairs the winner of the two from the player's perspective.
// I.e., the function will output "You Lose!" if the player loses
const playRound = (playerSelection, computerSelection) => {
    const playerChoice = capitalize(playerSelection)
    let playerWon;

    if (playerChoice === computerSelection) {
        return 'It\'s a tie!'
    }

    if (playerChoice === 'Rock') {
        if (computerSelection === 'Scissors') {
            playerWon = true;
        }
    } else if (playerChoice === 'Paper') {
        if (computerSelection === 'Rock') {
            playerWon = true;
        }
    } else if (playerChoice === 'Scissors') {
        if (computerSelection === 'Paper') {
            playerWon = true;
        }
    }

    if (playerWon) {
        return `You Win! ${playerChoice} beats ${computerSelection}`;
    } else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    }
}


const playerChoice = getPlayerChoice()

const game = () => {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const gameOutcome = playRound(playerChoice, getComputerChoice())

        console.log(gameOutcome)

        if (gameOutcome.includes('Win!')) {
            playerScore++;
        } else if (gameOutcome.includes('Lose!')) {
            computerScore++;
        }
    }

    if (playerScore > computerScore) {
        return 'You Win!'
    } else if (computerScore > playerScore) {
        return 'You Lose!'
    } else {
        return 'You Tied!'
    }
}


console.log(game())



// utility functions
function capitalize(string)  {
    const stringInLowerCase = string.toLowerCase();
    const capitalizedString = `${stringInLowerCase[0].toUpperCase()}${stringInLowerCase.slice(1)}`;
    return capitalizedString
}
