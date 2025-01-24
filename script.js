
//Initializing score of computer and player
let humanScore = 0;
let computerScore = 0;

//Referencing elements
const rockBtn = document.querySelector('#rock-btn');
const paperBtn = document.querySelector('#paper-btn');
const scissorsBtn = document.querySelector('#scissors-btn');

const roundResults = document.querySelector('#round-results');
const humanRoundResults = document.querySelector('#human-running-score');
const computerRoundResults = document.querySelector('#computer-running-score');
const gameResults = document.querySelector('#game-results');

//Function to generate a random number that represents a random choice between Rock, Paper and Scissor
function getComputerChoice() {
    const computerChoice = ['rock', 'paper', 'scissors']; 
    return computerChoice[Math.floor(Math.random() * 3)];
}


    //Function to play 1 round
    function playRound(humanSelection, computerSelection) {
        if (humanSelection === computerSelection) {
         roundResults.textContent = 'It\'s a tie this round!';
        } else if (humanSelection === 'rock' && computerSelection === 'scissors') {
            humanScore++;
         roundResults.textContent = 'You win this round! Rock beats Scissors.'
        } else if (humanSelection === 'paper' && computerSelection === 'rock') {
            humanScore++;
         roundResults.textContent = 'You win this round! Paper beats Rock.'
        } else if (humanSelection === 'scissors' && computerSelection === 'paper') {
            humanScore++;
         roundResults.textContent = 'You win this round! Scissors beats Paper.'
        } else if (humanSelection === 'rock' && computerSelection === 'paper') {
            computerScore++;
         roundResults.textContent = 'You lose this round! Paper beats Rock.'
        } else if (humanSelection === 'paper' && computerSelection === 'scissors') {
            computerScore++;
         roundResults.textContent = 'You lose this round! Scissors beats Paper.'
        } else if (humanSelection === 'scissors' && computerSelection === 'rock') {
            computerScore++;
         roundResults.textContent = 'You lose this round! Rock beats Scissors.'
        } 
        humanRoundResults.textContent = `Player Score: ${humanScore}`; 
        computerRoundResults.textContent = `Computer: ${computerScore}`;
    }
     

    rockBtn.addEventListener('click', () => {
        playRound('rock', getComputerChoice());
        checkWinner();
    }); 
    paperBtn.addEventListener('click', () => {
        playRound('paper', getComputerChoice());
        checkWinner();
    }); 
    scissorsBtn.addEventListener('click', () => {
        playRound('scissors', getComputerChoice());
        checkWinner();
    }); 
    
    //Check winner
    function checkWinner() {
        if (humanScore === 5) {
        gameResults.textContent = 'You WON the game!'; 
        } else if (computerScore === 5) {
        gameResults.textContent = 'The computer beat you. You LOST the game!';
        } 
    }    



