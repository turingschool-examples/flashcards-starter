const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.currentCard = deck.cards[0];
    this.turns = 0;
  };
  returnCurrentCard() {
    this.currentCard = this.deck.cards[this.turns];
    return this.currentCard;
  };
  takeTurn(guess) {
    let turn = new Turn(guess, this.currentCard);
    this.returnCurrentCard();
    this.turns += 1;
    //if evaluateGuess is true
    if (turn.evaluateGuess) {
      //invoke giveFeedback function
      return turn.giveFeedback();
      //if its false, invoke giveFeedback function
    } else {
      return turn.giveFeedback();
    }
  };
};


module.exports = Round;
