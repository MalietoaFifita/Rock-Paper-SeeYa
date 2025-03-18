// Get references to the DOM elements
const playerDiv = document.getElementById('playerDiv');
const computerDiv = document.getElementById('computerDiv');
const resultDiv = document.getElementById('resultDiv');
const choiceButtons = document.querySelectorAll('.choiceBtn');
const winCounterDisplay = document.getElementById('winCounter');

// Initialize win counter
let winCounter = 0;

// Add event listeners to the buttons
choiceButtons.forEach(button => {
    button.addEventListener('click', playGame);
});

// Function to handle the game logic
function playGame(event) {
    // Player's choice (from the button clicked)
    const playerChoice = event.target.querySelector('img').alt.toLowerCase(); // "rock", "paper", or "scissors"

    // Computer's choice (randomly generated)
    const computerChoice = getComputerChoice();

    // Display the selected images
    playerDiv.querySelector('img').src = `./images/${playerChoice}.png`;
    computerDiv.querySelector('img').src = `./images/${computerChoice}.png`;

    // Determine the result
    const result = determineWinner(playerChoice, computerChoice);

    // Display the result
    resultDiv.querySelector('h1').textContent = result;

    // Update the win counter
    if (result === 'You won!') {
        winCounter++;
        if (winCounter === 3) {
            // Rickroll the player after three consecutive wins
            window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'; // Rick Astley video
        }
    } else {
        // Reset the win counter if the player doesn't win
        winCounter = 0;
    }

    // Update the win counter display
    winCounterDisplay.textContent = `Wins in a row: ${winCounter}`;
}

// Function to get the computer's choice
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Function to determine the winner
function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'Draw!';
    }

    if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'You won!';
    } else {
        return 'You lost!';
    }
}