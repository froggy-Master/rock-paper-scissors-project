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

// function evaluateRount compares the player's selection and the computer's
// and declairs the winner of the two from the player's perspective.
// I.e., the function will output "You Lose!" if the player loses
const declareWinner = (playerSelection, computerSelection) => {
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

console.log(declareWinner('Rock', getComputerChoice()))





// utility functions
function capitalize(string)  {
    const stringInLowerCase = string.toLowerCase();
    const capitalizedString = `${stringInLowerCase[0].toUpperCase()}${stringInLowerCase.slice(1)}`;
    return capitalizedString
}
