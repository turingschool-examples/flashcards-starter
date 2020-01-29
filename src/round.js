var Turn = require('../src/turn');

class Round {
  constructor(cardDeck) {
    this.currentCard = cardDeck.cardsInDeck[0];
    this.turns = 0;
    // this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.currentCard;
  }

  takeTurns(userGuess, cardDeck) {
    var turn = new Turn(userGuess, this.currentCard);
    this.turns += 1;
    this.currentCard = cardDeck.cardsInDeck[this.turns];
    // return turn.giveFeedback();
  }
}

module.exports = Round;
