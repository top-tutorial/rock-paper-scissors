
let playerStats = 0;
let computerStats = 0;

let _score = document.querySelector('.score');
let _playerSelection = document.querySelector('.player');
let _computerSelection = document.querySelector('.computer');

let buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', () => play(button) ));

function play(button) {
    if(!isGameEnd()) {
        let playerSelection = button.textContent;
        let computerSelection = computerPlay()

        playRound(playerSelection, computerSelection);    
    }
    else {
        declareOverallResult();
        askPlayAgain();
    }
}

function declareOverallResult() {
    alert(playerStats === computerStats ? `It's a draw ${playerStats}:${computerStats}`
    : playerStats > computerStats ? `Player wins: ${playerStats}:${computerStats}` : `Computer wins ${computerStats}:${playerStats}`);
}

function askPlayAgain() {
    if(confirm('Play Again?')) {
        playerStats = 0;
        computerStats = 0;
        updateScore();
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();

    let outcome = playerSelection.concat(computerSelection);
    let result = checkWinner(outcome, playerSelection, computerSelection);

    updateChoices(playerSelection, computerSelection);
    updateStats(result, playerSelection, computerSelection);
    updateScore();

    setTimeout(() => {
        if(isGameEnd())
            askPlayAgain();
    }, 10);
   
    return result;
}

function checkWinner(outcome, playerSelection, computerSelection) {
    let result; 

    switch(outcome) {
        case 'ROCKSCISSORS':
        case 'PAPERROCK':
        case 'SCISSORSPAPER': result = 1; break;
        default: result = 0;
    }

    if(playerSelection == computerSelection)
        result = -1;

    return result;
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
    switch (result) {
        case 1: playerStats++; break;
        case 0: computerStats++; break;
    }

    setTimeout(() => {
        declareWinner(result, playerSelection, computerSelection);
        resetChoices();
    }, 0);
}

function declareWinner(result, playerSelection, computerSelection) {
    let declareWinner;

    switch(result) {
        case 1:  declareWinner = `Player wins! ${playerSelection} beats ${computerSelection}`;
                 break;
        case 0:  declareWinner = `Computer wins! ${computerSelection} beats ${playerSelection}`;
                 break;
        default: declareWinner = 'It\'s a draw!';
                 break;
    }
    alert(declareWinner);
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

