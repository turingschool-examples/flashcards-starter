const inquirer = require('inquirer');

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
    name: 'orders',
    choices: choices
  };
}

const getQuestions = (round) => {
  return Promise.resolve(round);
}

const confirmUpdate = (id, round) => {
  const feedback = round.takeTurn(id);
  return {
    name: 'toUpdate',
    message: `Your answer of ${id} is ${feedback}`
  }
}

async function main(round) {

  const questions = await getQuestions(round);
  const getOrder = await inquirer.prompt(genList(questions));
  const getConfirm = await inquirer.prompt(confirmUpdate(getOrder.orders, round));

    if(!round.returnCurrentCard()) {
      round.endRound();
    } else {
      main(round);
    }
}

module.exports.main = main;