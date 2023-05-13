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

function getComputerChoice () {
    //possible outcomes stored in an aray
    const possibleComputerChoices = ['rock','paper','scissors'];
    //using the math.random function, make a random choice from possibleComputerChoices
    const computerChoice = possibleComputerChoices[Math.floor(Math.random() * possibleComputerChoices.length)]
    //return the random choice to the user as the computer's choice
    return computerChoice;
}

/*Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock" */

function playRound(playerSelection, computerSelection) {
    //condition to check if playerSelection loses
    if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper' || playerSelection.toLowerCase() === 'scissors' && computerSelection === 'rock' || playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissors') {
        return 'you lost the round'
    }
    //condition to check if computerSelection loses
    else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock' || playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper' || playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors') {
        return 'you won this round'
    }

    else {
        return 'tie'
    }
    
} 



function game() {
    //declare two local variables, one to contain the player's selection and another to contain the computer's selection
    const computerSelection = getComputerChoice();
    const playerSelection = prompt('what is your choice? ');
    console.log(playRound(playerSelection, computerSelection));
}

game()