const posibilities = ["rock", "paper", "scissors"]

function computerPlay(){
    random = Math.floor(Math.random() * posibilities.length)
    return posibilities[random];
}

function playRound(playerSelection, computerSelection){
    switch(playerSelection) {
        case "rock":
            if (computerSelection == "paper"){
                return 2;
            }
            else if (computerSelection == "scissors"){
                return 1;
            }
            else {
                return 0;
            }
        case "paper":
            if (computerSelection == "scissors"){
                return 2;
            }
            else if (computerSelection == "rock"){
                return 1;
            }
            else {
                return 0;
            }
        case "scissors":
            if (computerSelection == "rock"){
                return 2;
            }
            else if (computerSelection == "paper"){
                return 1;
            }
            else {
                return 0;
            }
      }
}

function game(){
    let scores = [5];
    let computerScore = 0;
    let userScore = 0;
    let playerSelection;
    let computerSelection;

    for (let index = 0; index < 5; index++) {
        do {
            if(playerSelection){
                if(!posibilities.includes(playerSelection.toLowerCase())){
                    playerSelection = prompt(`Round(${index+1}) You made a mistake. Please enter rock, paper or scissors:`);
                }
                else{
                    playerSelection = prompt(`Round(${index+1}) Please enter rock, paper or scissors:`);
                }
            }
            else{
                playerSelection = prompt(`Round(${index+1}) Please enter rock, paper or scissors:`);
            }
        } while (!posibilities.includes(playerSelection.toLowerCase()));
        computerSelection = computerPlay();
        scores[index] = playRound(playerSelection, computerSelection);
        playerSelection = false;
        if(scores[index] == 2){
            computerScore++;
            console.log(`The computer wins this round. Beep Beep. Computer:${computerScore} You:${userScore}`);
        }
        else if(scores[index] == 1){
            userScore++;
            console.log(`This round goes to you! Computer:${computerScore} You:${userScore}`);
        }
        else{
            console.log(`It's a tie. Computer:${computerScore} You:${userScore}`);
        }
    }
    if(computerScore>userScore){
        console.log(`The computer wins the game. Beep Beep. Computer:${computerScore} You:${userScore}`);
    }
    else if(userScore>computerScore){
        console.log(`You win! Down with the computers! Computer:${computerScore} You:${userScore}`);
    }
    else{
        console.log(`It's a tie. It seems you have the same level brain as a computer.. unsure if good or bad. Computer:${computerScore} You:${userScore}`);
    }
}

game();