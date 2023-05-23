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

//declare the main variables
let playerScore = document.getElementById('playerScore');
let computerScore = document.getElementById('computerScore');
let randomMessage = document.getElementById('motivateMe');

//declare a function which returns a quote from an array
function motivationPromt() {
    //possible quotes stored in an array
    const listOfMessages = ['If you lose, you are gay','Loser, you need motivation for this?','Grow up kid, stop being such a wimp', 'bruh really?','How old are you mann, you do not need this'];
    //choose a random quote from the array
    let messageOutput = listOfMessages[Math.floor(Math.random() * listOfMessages.length)];
    //alert the result
    alert (messageOutput);
}
//when 'Motivate Me' button is clicked... return the motivationPrompt function
randomMessage.addEventListener('click', function() {return motivationPromt();})

//function to randomise computer choice
function getComputerChoice () {
    //possible outcomes stored in an aray
    const possibleComputerChoices = ['rock','paper','scissors'];
    //using the math.random function, make a random choice from possibleComputerChoices
    const computerOption = possibleComputerChoices[Math.floor(Math.random() * possibleComputerChoices.length)]
    //return the random choice to the user as the computer's choice
    return computerOption;
}

//declare selection variables
let playerChoiceRock = document.querySelector('rock');
let playerChoicePaper = document.querySelector('paper');
let playerChoiceScissors = document.querySelector('scissors')
let computerChoice = getComputerChoice();

//functions to run if player clicks on an image
playerChoiceRock.addEventListener('click', function() {return true;});

//declare editable variables
let playerChose = document.querySelector('playerChose');
let outputChoice = document.createElement('p')
outputChoice.textContent = 'you chose rock'

if (getComputerChoice === 'rock') {
    playerChose.appendChild(outputChoice)
    prompt (playerChose);
}