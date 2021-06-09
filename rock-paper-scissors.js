
function computerPlay() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random()*3)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();
    let outcome = playerSelection.concat(computerSelection);

    if(playerSelection == computerSelection)
        return -1;
    
    switch(outcome) {
        case 'ROCKSCISSORS':
        case 'PAPERROCK':
        case 'SCISSORSPAPER': return 1;
        default: return 0;
    }
}

function capitalize(string) {
    let newString = string.toLowerCase().split("");
    newString[0] = newString[0].toUpperCase();
    return newString.join("");
}

function declareOverallResult(playerStats, computerStats) {
    console.log(playerStats === computerStats ? `It's a draw ${playerStats}:${computerStats}`
    : playerStats > computerStats ? `Player wins: ${playerStats}:${computerStats}` : `Computer wins ${computerStats}:${playerStats}`);
}

function game() {
    let playerStats = 0;
    let computerStats = 0;

    for(let i = 0; i < 5; i++) {
        let computerSelection = computerPlay();
        let playerSelection = capitalize(prompt('Pick between rock, paper, scissors: ', 'rock'));
        let result = playRound(playerSelection, computerSelection);

        let declareWinner;
        if(result === 1) {
            playerStats++;
            declareWinner = `Player wins! ${playerSelection} beats ${computerSelection}`;
        }
        else if(result === -1) {
            declareWinner = 'It\'s a draw!';
        }
        else {
            computerStats++;
            declareWinner = `Computer wins! ${computerSelection} beats ${playerSelection}`;
        }
            console.log(declareWinner);
    }
    declareOverallResult(playerStats, computerStats);
}

game();