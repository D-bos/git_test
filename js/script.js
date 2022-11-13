function getComputerChoice() {
    let n = Math.random()*10;
    switch (true) {
        case n<=3:
          return 'Rock';
                break;
        case (n=>3) && (n<=6):
           return 'Paper';
            break;
        case (n>6):
            return 'Scissors';
            break;
        default: 
            alert(`the function chose a number greater than 9 or lesser than 0`);
            break;
    }
}

 playerSelection= prompt("Choose either Rock, Paper or Scissors");
 computerSelection= getComputerChoice();

function singleRound(playerSelection, computerSelection) {
    if ((playerSelection.toLowerCase() === 'rock') && (computerSelection === 'Scissors')) {
            alert('You win! Rock beats Scissors');
    } else if ((playerSelection.toLowerCase() === 'rock') && (computerSelection === 'Paper')) {
            alert('You lose! Paper beats Rock');
    }
    if ((playerSelection.toLowerCase() === 'paper') && (computerSelection === 'Scissors')) {
            alert('You lose! Scissors beats Paper');
    } else if ((playerSelection.toLowerCase() === 'paper') && (computerSelection === 'rock')) {
            alert('You win! Paper beats Rock');
    }
    if ((playerSelection.toLowerCase() === 'scissors') && (computerSelection === 'Rock')) {
            alert('You lose! Rock beats Scissors');
    } else if ((playerSelection.toLowerCase() === 'scissors') && (computerSelection === 'Paper')) {
            alert('You win! Scissors beats Paper');
    }
}

function game() {
        let counter=0;
        for (let i=1; i<5; i++) {
                singleRound(playerSelection, getComputerChoice);
                if (singleRound(playerSelection, getComputerChoice).substring(4,5)==='l') {
                        counter -=1;
                } else if (singleRound(playerSelection, getComputerChoice).substring(4,5)=== 'w') {
                        counter +=1;
                }
                alert(`Your score right now is ${counter}`);
        }
}