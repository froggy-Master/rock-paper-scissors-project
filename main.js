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