const Turn = require('./Turn');
class Round {
  constructor(deck) {
    this.deck = deck;
    this.currentCard = deck.cards[0];
    this.turns = 0;
    this.correctGuesses = [];
    this.incorrectGuesses = [];
  };

  returnCurrentCard() {
    return this.currentCard;
  };

  takeTurn(guess) {
    let newTurn = new Turn(guess, this.currentCard);
    if (newTurn.evaluateGuess()) {
      this.correctGuesses.push(this.currentCard.id);
    } else {
      this.incorrectGuesses.push(this.currentCard.id);
    }
    this.turns++;
    this.currentCard = this.deck.cards[this.turns];
    return newTurn.giveFeedback();
  };

  calculatePercentCorrect() {
    return this.correctGuesses.length / (this.correctGuesses.length + this.incorrectGuesses.length);
  };

  endRound() {
    let percentCorrect = this.calculatePercentCorrect().toFixed(2) * 100;
    return `** Round over! ** You answered ${percentCorrect}% of the questions correctly!`;
  };
};

module.exports = Round;