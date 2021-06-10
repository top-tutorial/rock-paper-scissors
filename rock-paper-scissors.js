
let playerStats = 0;
let computerStats = 0;

let _score = document.querySelector('.score');
let _playerSelection = document.querySelector('.player');
let _computerSelection = document.querySelector('.computer');

let buttons = document.querySelectorAll('button');
buttons.forEach(button => 
    button.addEventListener('click', () => {
        if(!isGameEnd()) {
            let playerSelection = button.textContent;
            let computerSelection = computerPlay()
            let result = playRound(playerSelection, computerSelection);
            
            updateChoices(playerSelection, computerSelection);
            updateStats(result, playerSelection, computerSelection);
        }
        else
            declareOverallResult();   
    }
    ));

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

function updateChoices(playerSelection, computerSelection) {
    _playerSelection.textContent = `Player: ${playerSelection}`;
    _computerSelection.textContent = `Computer: ${computerSelection}`;
}

function resetChoices() {
    _playerSelection.textContent = `Player: Picking...`;
    _computerSelection.textContent = `Computer: Picking...`;
}

function updateStats(result, playerSelection, computerSelection) {
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

    setTimeout(() => {
        alert(declareWinner);
        resetChoices();
        updateScore();
        
    }, 0);
    
}

function updateScore() {
    _score.textContent = `${playerStats}:${computerStats}`;
}

function isGameEnd() {
    return playerStats === 5 || computerStats === 5;
}

function computerPlay() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random()*3)];
}

function capitalize(string) {
    let newString = string.toLowerCase().split("");
    newString[0] = newString[0].toUpperCase();
    return newString.join("");
}

function declareOverallResult() {
    alert(playerStats === computerStats ? `It's a draw ${playerStats}:${computerStats}`
    : playerStats > computerStats ? `Player wins: ${playerStats}:${computerStats}` : `Computer wins ${computerStats}:${playerStats}`);
}