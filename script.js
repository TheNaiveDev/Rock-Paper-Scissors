//make a list containing the rock, paper and scissors - done
//use the random function to select one random item from the list - done


/*steps taken in order to obtain the random computerChoice
    -first off, create the array that will hold the data(list)
    -lets say the array is called myListArr and contains the following items ['fish','car','drain']
    -in order to make a random choice, we can create a new const var, say, randomChoice
    -we can then assign the randomChoice constant to an index in myListArr(we dont specify which index just yet)
    -it will look like this const randomChoice = myListArr[]
    -from here, we will have to use the Math function
    -since the math function returns a decimal, we will have to use Math.floor() to make sure it is floored
    -now in the math.floor parenthesis, we will include a math.random function which produce a random number between 0 and 1
    -in the same math.floor parenthesis, multiply the random number by the length of the array. the result will be floored and then an integer will be the output.
    - that integer will be the final value which will be used to get the index of an item in an array.

*/

//motivation variable
let randomMessage = document.getElementById('motivateMe');

//declare a function which returns a quote from an array
function motivationPrompt() {
    //possible quotes stored in an array
    const listOfMessages = ['If you lose, you are gay','Loser, you need motivation for this?','Grow up kid, stop being such a wimp', 'bruh really?','How old are you mann, you do not need this'];
    //choose a random quote from the array
    let messageOutput = listOfMessages[Math.floor(Math.random() * listOfMessages.length)];
    //alert the result
    alert (messageOutput);
}
//when 'Motivate Me' button is clicked... return the motivationPrompt function
randomMessage.addEventListener('click',motivationPrompt);

//create an array to include the computer choices
const possibleComputerChoices = ['rock','paper','scissors'];

//create a variable to return a random choice from the array
let computerChose = document.getElementById('computerChose');
let playerChose = document.getElementById('playerChose');
let computerScore = document.getElementById('computerScore');
let playerScore = document.getElementById('playerScore');
let winner = document.getElementById('winner');
function checkWinner() {
    if (computerScore.textContent === '5') {
        computerScore.textContent = '0';
        playerScore.textContent = '0';
        winner.textContent = 'COMPUTER WON!';
    } else if (playerScore.textContent === '5') {
        computerScore.textContent = '0';
        playerScore.textContent = '0';
        winner.textContent = 'PLAYER WON!';
    }
};

function rockResult() {
    const possibleComputerChoices = ['rock', 'paper', 'scissors'];
    let computerOption = possibleComputerChoices[Math.floor(Math.random() * possibleComputerChoices.length)];
    computerChose.textContent = '';
    if (computerOption === 'rock') {
        computerChose.textContent += 'Rock';
        playerChose.textContent = 'Rock'
    } else if (computerOption === 'paper') {
        computerChose.textContent += 'Paper';
        playerChose.textContent = 'Rock'

    } else {
        computerChose.textContent += 'Scissors';
        playerChose.textContent = 'Rock'

    }  
    if (computerChose.textContent === 'Paper' && playerChose.textContent === 'Rock') {
        computerScore.textContent = Number(computerScore.textContent) + 1;
    }
    else if (computerChose.textContent === 'Scissors' && playerChose.textContent === 'Rock') {
        playerScore.textContent = Number(playerScore.textContent) + 1;
    }

    checkWinner();
};

function paperResult() {
    const possibleComputerChoices = ['rock', 'paper', 'scissors'];
    let computerOption = possibleComputerChoices[Math.floor(Math.random() * possibleComputerChoices.length)];
    computerChose.textContent = '';
    playerChose.textContent = '';
    if (computerOption === 'rock') {
        computerChose.textContent += 'Rock';
        playerChose.textContent = 'Paper'
    } else if (computerOption === 'paper') {
        computerChose.textContent += 'Paper';
        playerChose.textContent = 'Paper'
    } else {
        computerChose.textContent += 'Scissors';
        playerChose.textContent = 'Paper'
    }  
    if (computerChose.textContent === 'Scissors' && playerChose.textContent === 'Paper') {
        computerScore.textContent = Number(computerScore.textContent) + 1;
    }
    else if (computerChose.textContent === 'Rock' && playerChose.textContent === 'Paper') {
        playerScore.textContent = Number(playerScore.textContent) + 1;
    }
    checkWinner();

}

function scissorsResult() {
    const possibleComputerChoices = ['rock', 'paper', 'scissors'];
    let computerOption = possibleComputerChoices[Math.floor(Math.random() * possibleComputerChoices.length)];
    computerChose.textContent = '';
    playerChose.textContent = '';
    if (computerOption === 'rock') {
        computerChose.textContent += 'Rock';
        playerChose.textContent = 'Scissors';
    } else if (computerOption === 'paper') {
        computerChose.textContent += 'Paper';
        playerChose.textContent = 'Scissors';

    } else {
        computerChose.textContent += 'Scissors';
        playerChose.textContent = 'Scissors';

    }  
    
    if (computerChose.textContent === 'Paper' && playerChose.textContent === 'Scissors') {
        playerScore.textContent = Number(playerScore.textContent) + 1;
    }
    else if (computerChose.textContent === 'Rock' && playerChose.textContent === 'Scissors') {
        computerScore.textContent = Number(computerScore.textContent) + 1;
    }
    checkWinner();
};