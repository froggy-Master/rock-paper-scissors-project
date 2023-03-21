const getComputerChoice = () => {
    const value = Math.floor(Math.random() * 3);

    switch (value) {
        case 0:
            return 'Rock';
            break;
        case 1:
            return 'Paper';
            break;
        case 2: 
            return 'Scissors';
            break;
        default:
            throw new Error;
    }
}

const getPlayerChoice = (card) => {
    return card.target.getAttribute('data');
}

let playerScore = 0;
let computerScore = 0;

const evaluateGame = (playerChoice, computerChoice) => {
    if (playerChoice === computerChoice) {
        // handle tie
        console.log('you tie')
        alert('You Tied!')
    } else if ((playerChoice === 'Rock' && computerChoice === 'Scissors') || (playerChoice === 'Paper' && computerChoice === 'Rock') || playerChoice === 'Scissors' && computerChoice === 'Paper') {
        // handle win
        console.log('you win')
        playerScore++;
        document.querySelector(`.player-score > h3`).textContent = `Score: ${playerScore}`;
    } else {
        // handle loss
        computerScore++;
        document.querySelector(`.computer-score > h3`).textContent = `Score: ${computerScore}`;
        console.log('you lose')
    }
}

const reset = () => {
    playerScore = 0;
    computerScore = 0;
    document.querySelector(`.computer-score > h3`).textContent = `Score: ${computerScore}`;
    document.querySelector(`.player-score > h3`).textContent = `Score: ${playerScore}`;
}


document.querySelector('.cards').childNodes.forEach(card => {
    card.addEventListener('click', e => {
        const playerChoice = getPlayerChoice(e);
        const computerChoice = getComputerChoice();
        document.querySelector(`.card[data="${playerChoice}"]`).style.cssText = 'border: 2px solid #867070; transform: scale(1.03)';
        document.querySelector(`.card[id="${computerChoice}"]`).style.cssText = 'border: 2px solid #867070; transform: scale(1.03)';
        evaluateGame(playerChoice, computerChoice)
    })
})

document.querySelector('#reset').addEventListener('click', reset)