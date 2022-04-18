//jshint esversion: 6

// Get header, buttons and input.

const getButton = document.querySelectorAll('button');
const getInput = document.querySelector('select');

const playerOne = document.querySelector('#player-one');
const playerTwo = document.querySelector('#player-two');
const resetGame = document.querySelector('#reset');

// Get score elements for colouring.

const score1 = document.querySelector('#score-1');
const score2 = document.querySelector('#score-2');

// Disable and enable game buttons.

const disableButtons = function() {
    playerOne.disabled = true;
    playerTwo.disabled = true;
};

const enableButtons = function() {
    playerOne.disabled = false;
    playerTwo.disabled = false;
};

// Disable buttons until input selected.

disableButtons();

// Initialise score variable.

let noPoints = '';

// Get input value from end user.

getInput.addEventListener('input', function() {
   noPoints = Number(this.value);
   enableButtons();
});

// Initalise score variables.

let playerOneScore = 0;
let playerTwoScore = 0;

// Loop through buttons - establish which button clicked.

for (let button of getButton) {
    button.addEventListener('click', function() {
            if (this.id === playerOne.id) {
                playerOneScore++;
                score1.textContent = playerOneScore;
            } else if (this.id === playerTwo.id) {
                playerTwoScore++;
                score2.textContent = playerTwoScore;
            } else if (this.id === resetGame.id) {
                reset();
            }
        game(playerOneScore, playerTwoScore, noPoints);
        });
}

// Score the game and establish winner.

const game = function(s1, s2, points) {
    if (s1 === points) {
        score1.classList.add('winner');
        score2.classList.add('loser');
        disableButtons();
        return console.log('Player 1 wins');
    } else if (s2 === points) {
        score1.classList.add('loser');
        score2.classList.add('winner');
        disableButtons();
        return console.log('Player 2 wins');
    }
};

// Reset game function.

const reset = function() {
    playerOneScore = 0;
    playerTwoScore = 0;
    score1.textContent = playerOneScore;
    score2.textContent = playerTwoScore;
    score1.classList.remove('winner', 'loser');
    score2.classList.remove('winner', 'loser');
    enableButtons();
};