const inquirer = require('inquirer');
let startTime = Date.now();

const genList = (round) => {
  let card = round.returnCurrentCard();
  
  let choices = card.answers.map((answer, index) => {
    return {
      key: index,
      value: answer
    }
  });
  return {
    type: 'rawlist',
    message: card.question,
    name: 'answers',
    choices: choices
  };
}

const getRound = (round) => {
  return Promise.resolve(round);
}

const confirmUpdate = (id, round) => {
  const feedback = round.takeTurn(id);
  return {
    name: 'feedback',
    message: `Your answer of ${id} is ${feedback}`
  }
}

async function main(round) {

  const currentRound = await getRound(round);
  const getAnswer = await inquirer.prompt(genList(currentRound));
  const getConfirm = await inquirer.prompt(confirmUpdate(getAnswer.answers, round));

    if(!round.returnCurrentCard()) {
      round.endRound();
      gameTimerHandler();
      failedGameHandler(round);
    } else {
      main(round);
    }
}

const failedGameHandler = (round) => {
  let percent = round.calculatePercentCorrect();

  if(percent < 90) {
    console.log('** Try Again! You need to score atleast 90%! **')
    startTime = Date.now();
    resetGame(round);
  }
}

const resetGame = (round) => {
  round.turns = 0;
  round.incorrectGuesses = [];
  main(round);
}

const gameTimerHandler = () => {
  const endTime = Date.now();
  const totalTime = (endTime - startTime);

  let minutes = Math.floor(totalTime / 60000);
  let seconds = ((totalTime % 60000) / 1000).toFixed(0); 
  let time = (seconds === 60 ? `${minutes++}:00` : `${minutes}:${(seconds < 10 ? '0' : '')}${seconds}`);
   
  console.log(`Time Elapsed: ${time}`);
}

module.exports.main = main;