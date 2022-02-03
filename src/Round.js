const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.currentCard = deck.cards[0];
    this.turns = 0;
    this.incorrectGuesses = [];
  };
  returnCurrentCard() {
    this.currentCard = this.deck.cards[this.turns];
    return this.currentCard;
  };
  takeTurn(guess) {
    let turn = new Turn(guess, this.currentCard);
    this.returnCurrentCard();
    this.turns += 1;
    //if evaluateGuess is not true
    if (!turn.evaluateGuess()) {
      //push current card to incorrectGuesses array
      this.incorrectGuesses.push(this.currentCard.id);
      //invoke giveFeedback function
      return turn.giveFeedback();
      //if its false, invoke giveFeedback function
    } else {
      return turn.giveFeedback();
    }
  };
  calculatePercentCorrect() {
    return 100 * ((this.turns - this.incorrectGuesses.length) / this.turns);
  }
};


module.exports = Round;
