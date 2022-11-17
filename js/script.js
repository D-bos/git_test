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

 
function singleRound(playerSelection, computerSelection) {
        switch(true) {
        
    case ((playerSelection.toLowerCase() === 'rock') && (computerSelection === 'Scissors')) :
            alert('You win! Rock beats Scissors');
            return  'You win this round! Rock beats Scissors';
            break;
    case ((playerSelection.toLowerCase() === 'rock') && (computerSelection === 'Paper')):
            alert('You lose this round! Paper beats Rock'); 
                return 'You lose this round! Paper beats Rock';
                break;
    case ((playerSelection.toLowerCase() === 'paper') && (computerSelection === 'Scissors')):
            alert('You lose this round! Scissors beats Paper');
                return 'You lose this round! Scissors beats Paper';
                break;
    case ((playerSelection.toLowerCase() === 'paper') && (computerSelection === 'Rock')):
            alert('You win this round! Paper beats Rock');
                return 'You win this round! Paper beats Rock';
                break;
    case ((playerSelection.toLowerCase() === 'scissors') && (computerSelection === 'Rock')) :
            alert('You lose this round! Rock beats Scissors');
                return 'You lose this round! Rock beats Scissors';
                break;
    case ((playerSelection.toLowerCase() === 'scissors') && (computerSelection === 'Paper')):
            alert('You win this round! Scissors beats Paper');
            return 'You win this round! Scissors beats Paper';
            break;
        default: 
                alert(`This round is a draw`);
                return `This round is a draw`;
    }
}



function game() {
        let counter=0;
        for (let i=1; i<6; i++) {
                let playerSelection= prompt("Choose either Rock, Paper or Scissors for this round");
                let computerSelection= getComputerChoice();
                alert(`Computer chose ${computerSelection}`);
                let r=singleRound(playerSelection, computerSelection);
                if (r.substring(4,5)==='l') {
                        --counter ;
                } else if (r.substring(4,5)=== 'w') {
                        ++counter ;
                }
                alert(`This is round ${i} of 5,and your score till now is ${counter}`);
        }
        if (counter<0) {
                alert(`You lost this game`);
        } else if (counter>0) {
                alert(`You win this game`);
        } else {alert(`This game ended in a draw`);
        }
}

game();