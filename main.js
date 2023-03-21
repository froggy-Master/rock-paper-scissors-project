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
        if (playerScore === 5) {
            alert('YOU WIN!!');
            reset()
        }
        document.querySelector(`.player-score > h3`).textContent = `Score: ${playerScore}`;
    } else {
        // handle loss
        computerScore++;
        if (computerScore === 5) {
            alert('YOU LOSE!!');
            reset()
        }
        document.querySelector(`.computer-score > h3`).textContent = `Score: ${computerScore}`;
        console.log('you lose')
    }
}

const disableCardListeners = () => {
    document.querySelector('.cards').childNodes.forEach(card => {
        card.removeEventListener('click', handleCardSelection)
    })
}

const enableCardListeners = () => {
    document.querySelector('.cards').childNodes.forEach(card => {
        card.addEventListener('click', handleCardSelection);
    })
    document.querySelectorAll('.card').forEach(card => {
        card.classList.remove('selected')
    })
    document.querySelector('button').style.cssText = 'background-color: #F5EBEB; color: #867070'
}

const handleCardSelection = e => {
    const playerChoice = getPlayerChoice(e);
    const computerChoice = getComputerChoice();
    document.querySelector(`.card[data="${playerChoice}"]`).classList.add('selected')
    document.querySelector(`.card[id="${computerChoice}"]`).classList.add('selected');
    evaluateGame(playerChoice, computerChoice)
    document.querySelector('button').style.cssText = 'background-color: #867070; color: #F5EBEB'
    disableCardListeners()
}

const reset = () => {
    playerScore = 0;
    computerScore = 0;
    document.querySelector(`.computer-score > h3`).textContent = `Score: ${computerScore}`;
    document.querySelector(`.player-score > h3`).textContent = `Score: ${playerScore}`;
}


document.querySelector('.cards').childNodes.forEach(card => {
    card.addEventListener('click', handleCardSelection)
})

document.querySelector('#reset').addEventListener('click', reset);

document.querySelector('#next-round').addEventListener('click', enableCardListeners);