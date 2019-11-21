const Turn = require('../src/Turn');


class Round {
  constructor(deck) {
    this.deck = deck.cards;
    this.currentCard = deck.cards[0];
    this.turns = 0;
    this.incorrectGuesses = [];
    this.percentageCorrect;
  };

  returnCurrentCard() {
    return this.currentCard;

  };

  takeTurn(guess, card) {
    const turn = new Turn(guess, card);
    this.turns ++;
    turn.evaluateGuess();
    if (!turn.match) {
      this.incorrectGuesses.push(this.currentCard.id);
    };
    var removedCard = this.deck.shift();
    this.deck.push(removedCard);
    this.currentCard = this.deck[0];
  };

  calculatePercentCorrect() {
    this.percentageCorrect = ((this.turns - this.incorrectGuesses.length) / this.turns) * 100;
    return this.percentageCorrect;
  };

  endRound() {
    return `** Round over! ** You answered ${this.percentageCorrect}% of the questions correctly!`
  };
}

module.exports = Round;
