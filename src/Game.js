const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

const Deck = require('./Deck');
const Turn = require('./Turn');
const Card = require('./Card');
const Round = require('./Round');

class Game {
  constructor() {}

  start(){
    const mappedArrayData = prototypeQuestions.map((cardData) => {
    return cardData = new Card(cardData.id, cardData.question, cardData.answer, cardData.correctAnswer)
    });
    const deck = new Deck(mappedArrayData)
    
  };

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}


module.exports = Game;
