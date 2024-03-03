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
        case "PAPER":
            if(computerSelection === "PAPER") return "You tied! Both chose Paper.";
            else if(computerSelection === "SCISSORS") return "You Lose! Scissors beats paper.";
            else return "You Won! Paper beats Rock.";
        case "SCISSORS":
            if(computerSelection === "SCISSORS") return "You tied! Both chose Scissors.";
            else if(computerSelection === "ROCK") return "You Lose! Rock beats Scissors.";
            else return "You Won! Scissors beats Paper.";
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

    const buttonPara = document.querySelector(".loadButtons");
    const currentResults = document.querySelector("#currentResults");
    const progress = document.querySelector("#progress");
    const user = document.querySelector("#user");
    const computer = document.querySelector("#computer");
    
    const rockBtn = document.querySelector("#rock");
    const paperBtn = document.querySelector("#paper");
    const scissorsBtn = document.querySelector("#scissors");
    const resetBtn = document.querySelector("#reset");

    resetBtn.style.display = "none";

    buttonPara.addEventListener('click', event => {
        if (event.target.tagName.toLowerCase() === 'img') {
            let userChoice = event.target.getAttribute("alt").toUpperCase();
            console.log(userChoice);

            if(userChoice !== "START OVER!"){
            
                let currResult = playRound(userChoice, getComputerChoice());
                console.log(currResult);

                if (currResult.startsWith("You Won")) userScore += 1;
                else if(currResult.startsWith("You Lose")) compScore += 1;

                console.log(userScore + "vs" + compScore);
                progress.innerHTML = `${currResult}`;
                user.innerHTML = `User score: ${userScore}`;
                computer.innerHTML = `Computer score: ${compScore}`

                if(userScore >= 5 || compScore >= 5){
                    currentResults.innerHTML = userScore > compScore ? "You won the game! Computer lost." : userScore < compScore ? "Computer won the game. You lost." : "It's a tie!";
                    resetBtn.style.display = "block";
                    scissorsBtn.style.display = "none";
                    paperBtn.style.display = "none";
                    rockBtn.style.display = "none";
                }
            } else {
                userScore = 0;
                compScore = 0;
                resetBtn.style.display = "none";
                scissorsBtn.style.display = "block";
                paperBtn.style.display = "block";
                rockBtn.style.display = "block";
                currentResults.innerHTML = "";
            }
        }
    })

  }

  playGame();