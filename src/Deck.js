const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Deck {
  constructor(cards) {
    this.cards = cards;
  } // where the heck is cards coming from Hannah whyyyyyyy

  countCards() {
    return this.cards.length;
  }
  
};

// Your Deck class should be initialized with an array of Card objects and should have an accompanying test file.It should know how many Cards are in the Deck.

module.exports = Deck;
