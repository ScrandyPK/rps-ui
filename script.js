//Set player and computer scores to 0
let playerScore = 0;
let computerScore = 0;
let currentRound = 0;
let roundSummary = "";

const choices = ["rock", "paper", "scissors"];

//Added an array with choices and created this function to take place of the old function that generated integers and converted them to choices.
function getComputerChoice(){
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}

//Prompts the user to input their choice. Turns their choice to lower case and verifies that it is one of the available options.
function getPlayerChoice() {
    let playerChoice = prompt("Do you choose rock, paper, or scissors?").toLowerCase();
    while (playerChoice != "rock" && playerChoice != "paper" && playerChoice != "scissors") {
        playerChoice = prompt("Whoops, that wasn't a valid choice, try entering your selection again.").toLowerCase();
    }
    return playerChoice;
}

//Updates the Scores on the HTML Side
function updateScores() {
    document.getElementById("computerScore").textContent = `Computer Points: ${computerScore}`;
    document.getElementById("playerScore").textContent = `Player Points: ${playerScore}`;
    document.getElementById("currentRound").innerHTML = `Current Round: ${currentRound}`;
    document.getElementById("roundSummary").innerHTML = `Round Summary: ${roundSummary}`;
}

function gameSummary() {
    if (playerScore > computerScore){
        document.getElementById("gameSummary").textContent = `You win! Player Score: ${playerScore} - Computer Score ${computerScore}`
    } else if (playerScore < computerScore){
        document.getElementById("gameSummary").textContent = `You lose! Player Score: ${playerScore} - Computer Score ${computerScore}`
    } else {
        document.getElementById("gameSummary").textContent = `It was a draw. ${playerScore} - ${computerScore}`
    }
}

function resetGame(){
    computerScore = 0;
    playerScore = 0;
    currentRound = 0;
    document.getElementById("roundSummary").innerHTML = `Round Summary:`;
    document.getElementById("gameSummary").textContent = ``
    updateScores();
}

//Takes the computer choice and the player choice and plays a round of Rock, Paper, Scissors. The output shares information about the round and it returns a score to whomever won that round, if there was a winner.
function playRound(computerSelection, playerSelection) {
    if (playerSelection === computerSelection){
        roundSummary = "Draw, you both played " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1) + ".";
    } else if ((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "scissors" && computerSelection == "paper")){
        roundSummary = "You won that round! " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1) + " beats " + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);
        playerScore++;
    } else {
        roundSummary = "You lost that round! " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1) + " beats " + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);
        computerScore++;
    }
    currentRound++;
    updateScores();
    
    if (currentRound === 5){
        gameSummary();
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
document.getElementById("computerScore").innerHTML = `Current Computer Score: ${computerScore}`;

document.getElementById("playerScore").innerHTML = `Current Player Score: ${playerScore}`;

document.getElementById("currentRound").innerHTML = `Current Round: ${currentRound}`;

document.getElementById("roundSummary").innerHTML = `Round Summary: ${roundSummary}`;