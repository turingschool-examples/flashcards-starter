const Turn = require('./Turn')

class Round {
  constructor(deck) {
    this.deck = deck;
    this.currentCard = deck.cards[0];
    this.turns = 0;
    this.incorrectGuesses = [];
  };
  returnCurrentCard() {
    return this.currentCard;
  };
  takeTurn(guess) {
    const turn = new Turn(guess, this.currentCard);
    this.turns++;
    if (turn.userGuess !== this.currentCard) {
      this.incorrectGuesses.push(this.currentCard.id);
    };
    this.currentCard = this.deck.cards[this.turns];
    return turn.giveFeedback();
  };
  calculatePercentCorrect() {
    return (this.turns - this.incorrectGuesses.length) / this.turns * 100;
  };
  endRound() {
    console.log(`**Round Over!**You answered ${this.calculatePercentCorrect()}% of the questions correctly!`);
  };
};

module.exports = Round;
