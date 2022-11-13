function getComputerChoice() {
    let n = Math.random()*10;
    switch (true) {
        case n<=3:
          return 'Rock';
                break;
        case (n>=3) && (n<=6):
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

 let playerSelection= prompt("Choose either Rock, Paper or Scissors");
let computerSelection= getComputerChoice();

 alert(`Computer chose ${computerSelection}` );

function singleRound(playerSelection, computerSelection) {
        switch(true) {
        
    case ((playerSelection.toLowerCase() === 'rock') && (computerSelection === 'Scissors')) :
            alert('You win! Rock beats Scissors');
            return  'You win! Rock beats Scissors';
            break;
    case ((playerSelection.toLowerCase() === 'rock') && (computerSelection === 'Paper')):
            alert('You lose! Paper beats Rock'); 
                return 'You lose! Paper beats Rock';
                break;
    case ((playerSelection.toLowerCase() === 'paper') && (computerSelection === 'Scissors')):
            alert('You lose! Scissors beats Paper');
                return 'You lose! Scissors beats Paper';
                break;
    case ((playerSelection.toLowerCase() === 'paper') && (computerSelection === 'Rock')):
            alert('You win! Paper beats Rock');
                return 'You win! Paper beats Rock';
                break;
    case ((playerSelection.toLowerCase() === 'scissors') && (computerSelection === 'Rock')) :
            alert('You lose! Rock beats Scissors');
                return 'You lose! Rock beats Scissors';
                break;
    case ((playerSelection.toLowerCase() === 'scissors') && (computerSelection === 'Paper')):
            alert('You win! Scissors beats Paper');
            return 'You win! Scissors beats Paper';
            break;
        default: 
                alert(`This is a draw`);
    }
}

singleRound(playerSelection, computerSelection);

function game() {
        let counter=0;
        for (let i=1; i<5; i++) {
                singleRound(playerSelection, getComputerChoice);
                if (singleRound(playerSelection, getComputerChoice).substring(4,5)==='l') {
                        counter++ ;
                } else if (singleRound(playerSelection, getComputerChoice).substring(4,5)=== 'w') {
                        counter-- ;
                }
                alert(`Your score right now is ${counter}`);
        }
        if (counter<0) {
                alert(`You lost this game`);
        } else if (counter>0) {
                alert(`You win this game`);
        } else {alert(`This game ended in a draw`);
        }
}

game();