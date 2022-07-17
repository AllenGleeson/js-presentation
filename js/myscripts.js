function computerPlay(){
    const posibilities = ["rock", "paper", "scissors"]
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
        playerSelection = prompt();
        computerSelection = computerPlay();
        scores[index] = playRound(playerSelection, computerSelection)
    }
    for (let index = 0; index < scores.length; index++) {
        if(scores[index] == 2){
            computerScore++;
        }
        else if(scores[index] == 1){
            userScore++;
        }
    }
    if(computerScore>userScore){
        return "The computer wins again. Beep Beep.";
    }
    else if(userScore>computerScore){
        return "You have a mind even greater than the computer!";
    }
    else{
        return "It seems it is a stalemate.";
    }
}