//declaring all the various variables
let computerScore = document.querySelector('#computerScore');
let playerScore = document.querySelector('#playerScore');
const ROCKBTN = document.querySelector('#rockBtn');
const PAPERBTN = document.querySelector('#paperBtn');
const SCISSORSBTN = document.querySelector('#scissorsBtn');
const RESETBTN = document.querySelector('.reset');
let computerChoiceImage = document.querySelector('.computer-choice-image');
let playerChoiceImage = document.querySelector('.player-choice-image');
let winner = document.querySelector('#winner');

    //creating player win function
function playerWin() {
    playerScore.textContent = Number(playerScore.textContent) + 1;
}

    //creating computer win function
function computerWin() {
    computerScore.textContent = Number(computerScore.textContent) +1;
}

    //creating the clear function
RESETBTN.addEventListener('click', () => {
    computerScore.textContent = 0;
    playerScore.textContent = 0;
    winner.textContent = 'GET READY!!!  '
})

    //creating the functin for rockBtn choice
ROCKBTN.addEventListener('click', () => {
        //creating computer choices
    const possibleComputerChoices = ['rock', 'paper', 'scissors'];
    let computerOption = possibleComputerChoices[Math.floor(Math.random() * possibleComputerChoices.length)];
    if (computerOption === 'paper')  {
        computerChoiceImage.innerHTML = "<img src='paper.png' style='width:100%; height:100%; border-radius: 5px;'>"
        playerChoiceImage.innerHTML = "<img src='redrock.png' style='width:100%; height:100%; border-radius: 5px;'>";
        computerWin();
    }
    else if (computerOption === 'scissors') {
        computerChoiceImage.innerHTML = "<img src='redscissors.png' style='width:100%; height:100%; border-radius: 5px;'>";
        playerChoiceImage.innerHTML = "<img src='rock.png' style='width:100%; height:100%; border-radius: 5px;'>";
        playerWin();
    }
    else {
            computerChoiceImage.innerHTML = "<img src='drawrock.png' style='width:100%; height:100%; border-radius: 5px;'>"
            playerChoiceImage.innerHTML = "<img src='drawrock.png' style='width:100%; height:100%; border-radius: 5px;'>";

        }
    gameStart()
});

PAPERBTN.addEventListener('click', () => {
        //creating computer choices
    const possibleComputerChoices = ['rock', 'paper', 'scissors'];
    let computerOption = possibleComputerChoices[Math.floor(Math.random() * possibleComputerChoices.length)];
    if (computerOption === 'rock')  {
        computerChoiceImage.innerHTML = "<img src='redrock.png' style='width:100%; height:100%; border-radius: 5px;'>"
        playerChoiceImage.innerHTML = "<img src='paper.png' style='width:100%; height:100%; border-radius: 5px;'>";
        playerWin();
    }
    else if (computerOption === 'scissors') {
        computerChoiceImage.innerHTML = "<img src='scissors.png' style='width:100%; height:100%; border-radius: 5px;'>"
        playerChoiceImage.innerHTML = "<img src='redpaper.png' style='width:100%; height:100%; border-radius: 5px;'>";
        computerWin();
    }
    else {
        computerChoiceImage.innerHTML = "<img src='drawpaper.png' style='width:100%; height:100%; border-radius: 5px;'>"
        playerChoiceImage.innerHTML = "<img src='drawpaper.png' style='width:100%; height:100%; border-radius: 5px;'>";

    }
    gameStart()
});

SCISSORSBTN.addEventListener('click', () => {
        //creating computer choices
    const possibleComputerChoices = ['rock', 'paper', 'scissors'];
    let computerOption = possibleComputerChoices[Math.floor(Math.random() * possibleComputerChoices.length)];
    if (computerOption === 'rock')  {
        computerChoiceImage.innerHTML = "<img src='rock.png' style='width:100%; height:100%; border-radius: 5px;'>";
        playerChoiceImage.innerHTML = "<img src='redscissors.png' style='width:100%; height:100%; border-radius: 5px;'>";
        computerWin();
    }
    else if (computerOption === 'paper') {
        computerChoiceImage.innerHTML = "<img src='redpaper.png' style='width:100%; height:100%; border-radius: 5px;'>"
        playerChoiceImage.innerHTML = "<img src='scissors.png' style='width:100%; height:100%; border-radius: 5px;'>";
        playerWin();
    }
    else {
        computerChoiceImage.innerHTML = "<img src='drawscissors.png' style='width:100%; height:100%; border-radius: 5px;'>"
        playerChoiceImage.innerHTML = "<img src='drawscissors.png' style='width:100%; height:100%; border-radius: 5px;'>";
    }
    gameStart()
});

    //ending the game
function gameStart() {
    
    //reseting the whole game 
    function reset() {
        computerScore.textContent = 0;
        playerScore.textContent = 0;
    }
    if (computerScore.textContent === '5' && playerScore.textContent != '5' ) {
        winner.textContent = 'COMPUTER WON!';
        reset();
    }
    else if (playerScore.textContent === '5' && computerScore.textContent != '5'){
        winner.textContent = 'PLAYER WON!';
        reset();
    }
        
    else {
        winner.textContent = 'Calculating Results ...';
    };
}


