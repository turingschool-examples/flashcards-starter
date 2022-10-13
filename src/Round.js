const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck.cards;
    this.turns = 0;
    this.incorrectGuesses = [];
    this.currentCard = deck.cards[0];
  };

  returnCurrentCard() {
    return this.currentCard;
  };

  takeTurn(guess) {
    this.turns += 1;
    let newTurn = new Turn(guess, this.currentCard);
    this.currentCard = this.deck[this.turns];
    if(!newTurn.evaluateGuess()) {
      this.incorrectGuesses.push(newTurn.card.id);
    };
    return newTurn.giveFeedback();
  };

  calculatePercentCorrect() {
    let percentCorrect = Math.round(((this.turns - this.incorrectGuesses.length)/this.turns)*100);
    return percentCorrect;
  }

  endRound() {
    let message = `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`;
    return message;
  };
};

module.exports = Round;
