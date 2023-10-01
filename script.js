//Set player and computer scores to 0
let playerScore = 0;
let computerScore = 0;
const choices = ["rock", "paper", "scissors"];

//Added an array with choices and created this function to take place of the old function that generated integers and converted them to choices.
function getComputerChoice(){
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}

//Creates random integer from 1 - 3
// function getRandomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
// }

// //Takes random integer and assigns a computer choice based on that number.
// function getComputerChoice(){
//     let computerChoice = getRandomInt(1,4);
//     if (computerChoice == 1){
//             computerChoice = "rock";
//             return computerChoice;
//         } else if (computerChoice == 2) {
//             computerChoice = "paper";
//             return computerChoice;
//         } else if (computerChoice == 3) {
//             computerChoice = "scissors";
//             return computerChoice;
//         }

// }

//Prompts the user to input their choice. Turns their choice to lower case and verifies that it is one of the available options.
function getPlayerChoice() {
        let playerChoice = prompt("Do you choose rock, paper, or scissors?").toLowerCase();
        while (playerChoice != "rock" && playerChoice != "paper" && playerChoice != "scissors") {
            playerChoice = prompt("Whoops, that wasn't a valid choice, try entering your selection again.").toLowerCase();
        }
        return playerChoice;
}

//Takes the computer choice and the player choice and plays a round of Rock, Paper, Scissors. The output shares information about the round and it returns a score to whomever won that round, if there was a winner.
function playRound(computerSelection, playerSelection) {
    if (playerSelection === computerSelection){
        console.log("Draw, you both played " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1) + ".");
        alert("Draw, you both played " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1) + ".");
    } else if ((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "scissors" && computerSelection == "paper")){
        console.log("You win! " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1) + " beats " + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1));
        alert("You win! " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1) + " beats " + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1));
        return playerScore++;
    } else {
        console.log("You lose! " + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1) + " beats " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1) + ".");
        alert("You lose! " + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1) + " beats " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1) + ".");
        return computerScore++;
    }
}

//Resets the scores to zero.
function resetScore(){
    computerScore = 0;
    playerScore = 0;
}

//Plays 5 rounds. Gives information about each round. After 5 rounds it shares the results and resets the scores to zero.
function playGame(){
    for (let i = 0; i < 5; i++){
    const computerSelection = getComputerChoice();
    const playerSelection = getPlayerChoice();
    playRound(computerSelection, playerSelection);
    alert("After " + (i+1) + " rounds, the score is " + playerScore + " to " + computerScore + ".");
    console.log("After " + (i+1) + " round(s), the score is " + playerScore + " to " + computerScore + ".");
    console.log("-----");
    }
    
    if (playerScore === computerScore){
        console.log("The game was a draw! Nice try.");
    }   else if (playerScore > computerScore){
        console.log("You win...you must have been practicing!");
    }   else {
        console.log("You lose...do you even know how to play this game?");
    }

    resetScore();
}