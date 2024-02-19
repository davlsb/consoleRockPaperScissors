function getComputerChoice(){
    //create a random number, from 1 to 3
    let randomChoice = Math.floor(Math.random() * 3) + 1;

    //choose r,p,s based on random number:
    switch(randomChoice){
        case 1: 
            return "Rock";
            break;
        case 2: 
            return "Paper";
            break;
        case 3: 
            return "Scissors";
            break;
    }

    return "Error";
}

function playRound(playerSelection, computerSelection) {
    // turn playerselection to uppercase
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();
    // if player is rock, print one per computer selection
    // if player is paper, print one per computer selection
    // if player is scissors, print one per computer selection
    switch(playerSelection){
        case "ROCK":
            if(computerSelection === "ROCK") return "You tied! Both chose Rock.";
            else if(computerSelection === "PAPER") return "You Lose! Paper beats rock.";
            else return "You won! Rock beats Scissors.";
            break;
        case "PAPER":
            if(computerSelection === "PAPER") return "You tied! Both chose Paper.";
            else if(computerSelection === "SCISSORS") return "You Lose! Scissors beats paper.";
            else return "You won! Paper beats Rock.";
            break;
        case "SCISSORS":
            if(computerSelection === "SCISSORS") return "You tied! Both chose Scissors.";
            else if(computerSelection === "ROCK") return "You Lose! Rock beats Scissors.";
            else return "You won! Scissors beats Paper.";
            break;
    }

    return "Error";
  }