// ask the user for their move
// the computer will choose their move 
// display who won/ show result

const readline = require('readline-sync');
VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

const WINNING_COMBOS = {
  rock:     ['scissors', 'lizard'],
  paper:    ['rock',     'spock'],
  scissors: ['paper',    'lizard'],
  lizard:   ['paper',    'spock'],
  spock:    ['rock',     'scissors'],
};

function prompt(msg) {
  console.log(`=> ${msg}`);
}


function roundWinner(userChoice, computerChoice) {
  return WINNING_COMBOS[userChoice].includes(computerChoice);
}

function displayWinner(userChoice, computerChoice) {
  prompt(`you chose ${userChoice}, computer chose ${computerChoice}`)

  if (roundWinner(userChoice, computerChoice)) {
    prompt("User wins this round!\n");
  } else if (userChoice === computerChoice) {
    prompt("It's a tie\n");
  } else {
    prompt("Computer wins this round!\n");
  }
}



while (true) {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice. Guess again!");
    choice = readline.question();
  }

  let userChoice = VALID_CHOICES
  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  roundWinner(userChoice, computerChoice);
  displayWinner(choice, computerChoice);

  prompt('Do you want to play again (y/n)?');
  let answer = readline.question().toLowerCase();

  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== 'y') break;
}