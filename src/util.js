const inquirer = require('inquirer');
const Round = require('../src/Round');
const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
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

async function main(round) {

  const currentRound = await getRound(round);
  const getAnswer = await inquirer.prompt(genList(currentRound));
  const getConfirm = await inquirer.prompt(confirmUpdate(getAnswer.answers, round));

    if(!round.returnCurrentCard() && round.calculatePercentCorrect() > 90) {
      round.endRound();
    } else if (round.calculatePercentCorrect() < 90) {
    console.log(`** Round over! ** You answered less than 90 percent of the questions correctly. Please try again.`)
      let cards = [];
      prototypeQuestions.forEach(element => {
        let singleCard = new Card(
          element.id, element.question, element.answers, element.correctAnswer);
          cards.push(singleCard)
      });
        let deck = new Deck(cards);
        let round2 = new Round(deck);
      let round = round2
      main(round)
    } else {
      main(round);
    }
}

module.exports.main = main;
