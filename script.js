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
            else return "You Won! Rock beats Scissors.";
            break;
        case "PAPER":
            if(computerSelection === "PAPER") return "You tied! Both chose Paper.";
            else if(computerSelection === "SCISSORS") return "You Lose! Scissors beats paper.";
            else return "You Won! Paper beats Rock.";
            break;
        case "SCISSORS":
            if(computerSelection === "SCISSORS") return "You tied! Both chose Scissors.";
            else if(computerSelection === "ROCK") return "You Lose! Rock beats Scissors.";
            else return "You Won! Scissors beats Paper.";
            break;
    }

    return "Error";
  }

  function playGame(){

    //create userScore
    let userScore = 0;
    //create computerScore 
    let compScore = 0;
    //loop 5 times
    //ask user for choice using prompt
    //verify it's one of the choices
    //log the answer
    for(let i = 0; i < 5; i++){
        let userChoice = prompt(`Alright! round ${i+1}. Choose Rock, Paper, Scissors, and shoot!`);
        //verify it can be used, else keep asking for another input
        while(!(userChoice.toUpperCase() === "ROCK" || userChoice.toUpperCase() === "PAPER" || userChoice.toUpperCase() === "SCISSORS"))
            userChoice = prompt(`Still on round ${i+1}. Choose Rock, Paper, Scissors, nothing else!`);

        //save result of round
        let currResult = playRound(userChoice, getComputerChoice());
        //log the result in console
        console.log(currResult);
        //track who won
        if (currResult.startsWith("You Won")) userScore += 1;
        else if(currResult.startsWith("You Lose")) compScore += 1;
    }

    console.log(userScore > compScore ? "You won! Computer lost." : userScore < compScore ? "Computer won. You lost." : "It's a tie!");
  }

  playGame();