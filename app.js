// Defining key variables to be used in game
const start = () => {
    let playerCount = 0;
    let computerCount = 0;
    let moves = 0;


    // Connecting DOM to back-end code
    const connection = () => {
        const rockButton = document.querySelector('.rock');
        const paperButton = document.querySelector('.paper');
        const scissorButton = document.querySelector('.scissors');

        const playerChoice = [rockButton, paperButton, scissorButton];
        const computerChoice = ['rock', 'paper', 'scissors'];

        // Modify variables once game starts
        playerChoice.forEach(option => {
            option.addEventListener('click', function() {
                const movesLeft = document.querySelector('.movesLeft');
                moves++;

                // Modify number displayed on DOM
                movesLeft.innerText = `Moves you have left: ${10-moves}`;

                const choiceId = Math.floor(Math.random()*3);
                const computerMove = computerChoice[choiceId];

                // Check who wins --> invoke function defined below
                winner(this.innerText, computerMove)

                // End game
                if(moves === 10) {
                    gameOver(playerChoice, movesLeft);
                }
            })
        })
    }


// Deciding who is the winner
const winner = (player, computer) => {
    const result = document.querySelector('.result');
    const playerScoreCard = document.querySelector('.p-count');
    const computerScoreCard = document.querySelector('.c-count');

    // To avoid any case sensitive errors
    player = player.toLowerCase();
    computer = computer.toLowerCase();

    if(player === computer) {
        result.textContent = 'Draw';
    } else if(player === 'rock') {
        if(computer === 'paper') {
            result.textContent = 'You lost';
            computerCount++;
            computerScoreCard.textContent = computerCount;
        } else {
            result.textContent = 'You won';
            playerCount++;
            playerScoreCard.textContent = playerCount;
        }
    } else if (player === 'scissors') {
        if(computer === 'rock') {
            result.textContent = 'You lost';
            computerCount++;
            computerScoreCard.textContent = computerCount;
        } else {
            result.textContent = 'You won';
            playerCount++;
            playerScoreCard.textContent = playerCount;
        }
    } else if (player === 'paper') {
        if(computer === 'scissors') {
            result.textContent = 'You lost';
            computerCount++;
            computerScoreCard.textContent = computerCount;
        } else {
            result.textContent = 'You won';
            playerCount++;
            playerScoreCard.textContent = playerCount;
        }
    }
}

// Function to exit game
const gameOver = (playerChoice, movesLeft) => {
    const chooseText = document.querySelector('.move');
    const result = document.querySelector('.result');
    const restartButton = document.querySelector('.restart');

    playerChoice.forEach(option => {
        option.style.display = 'none';
    })

    chooseText.innerText = 'Game is now over! Hope you enjoyed!';
    movesLeft.style.display = 'none';

    if(playerCount > computerCount) {
        result.style.fontSize = '3rem';
        result.innerText = 'Congratulations, you have won the game!';
        result.style.color = 'green';
    } else if(playerCount < computerCount) {
        result.style.fontSize = '3rem';
        result.innerText = 'Oh no! You have lost the game! Better luck next time!';
        result.style.color = 'red';
    } else {
        result.style.fontSize = '3rem';
        result.innerText = 'You are both even!';
        result.style.color = 'black';
    }

    restartButton.style.display = 'flex';
    restartButton.addEventListener('click', () => {
        window.location.reload();
    })
}


//Invoke connection function inside the start function
connection();

}

// Start the game
start();




