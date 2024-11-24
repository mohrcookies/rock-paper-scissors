
//Initializing score of computer and player
let humanScore = 0;
let computerScore = 0;

//Function to generate a random number that represents a random choice between Rock, Paper and Scissor
function getComputerChoice() {
    const computerChoice = ['rock', 'paper', 'scissors']; 
    return computerChoice[Math.floor(Math.random() * 3)];
}

//Function that asks user for input
function getHumanChoice() {
    let typedChoice = prompt('rock, paper, or scissors?');
    let humanChoice = typedChoice.toLowerCase();
    switch (humanChoice) {
        case 'rock':
        case 'paper':
        case 'scissors':
            console.log(`Your choice: ${humanChoice}`);
        return (humanChoice);
        break;
        default:
            alert('That is not an option! Please choose rock, paper, or scissors.');
    }
} 


//Function to play game
function playGame() {
    
    //Function to play 1 round
    function playRound(humanSelection, computerSelection) {
        if (humanSelection === computerSelection) {
        console.log('It\'s a tie!');
        } else if (humanSelection === 'rock' && computerSelection === 'scissors') {
            humanScore++;
            console.log('You win! Rock beats Scissors.');
            return humanScore;
        } else if (humanSelection === 'paper' && computerSelection === 'rock') {
            humanScore++;
            console.log('You win! Paper beats Rock.');
            return humanScore;
        } else if (humanSelection === 'scissors' && computerSelection === 'paper') {
            humanScore++;
            console.log('You win! Scissors beats Paper.');
            return humanScore;
        } else if (humanSelection === 'rock' && computerSelection === 'paper') {
            computerScore++;
            console.log('You lose! Paper beats Rock.');
            return computerScore;
        } else if (humanSelection === 'paper' && computerSelection === 'scissors') {
            computerScore++;
            console.log('You lose! Scissors beats Paper.');
            return computerScore;
        } else if (humanSelection === 'scissors' && computerSelection === 'rock') {
            computerScore++;
            console.log('You lose! Rock beats Scissors.');
            return computerScore;
        } 
    }
    //Loop to play 5 rounds
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }    
    
    //Declare winner
    if (humanScore > computerScore) {
        console.log('YOU WON THE GAME!')
    } else if (humanScore < computerScore) {
        console.log('YOU LOST THE GAME!')
    } else {
        console.log('TIE GAME!')
    }
    console.log(`You: ${humanScore}`, `Computer: ${computerScore}`);
}

playGame();