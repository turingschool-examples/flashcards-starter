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
      let x = '.......';
      x.split('').forEach(dot => console.log(dot.padStart(10)));
      console.log('standby...'.padStart(20));
      x.split('').forEach(dot => console.log(dot.padStart(10)));
      setTimeout(() => {
        console.log('be patient...'.padStart(20));
        x.split('').forEach(dot => console.log(dot.padStart(10)));
      }, 1500);
      setTimeout(() => {
        console.log('checking if user is worthy...'.padStart(20));
        x.split('').forEach(dot => console.log(dot.padStart(10)));
      }, 2250);
      setTimeout(() => {
        round.endRound();
      }, 3000);
    } else {
      main(round);
    }
}

module.exports.main = main;