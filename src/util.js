const inquirer = require('inquirer');
const data = require('./data');
const prototypeQuestions = data.prototypeData;

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

async function loadNewRound(round) {

  const currentRound = await getRound(round);
  const getAnswer = await inquirer.prompt(genList(currentRound));
  const getConfirm = await inquirer.prompt(confirmUpdate(getAnswer.answers, round));

    if(!round.returnCurrentCard()) {
      round.endRound();
      round.deck.cards = prototypeQuestions.filter(cardInfo => round.incorrectGuesses.includes(cardInfo.id))
      round.incorrectGuesses = [];
      round.turns = 0;
      round.timer = 0;
      loadNewRound(round);
    } else {
      loadNewRound(round);
    }
}

module.exports.loadNewRound = loadNewRound;