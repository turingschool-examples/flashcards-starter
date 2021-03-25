const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.incorrectGuesses = [];
    this.turns = 0;
    this.deck = deck;
  };

  returnCurrentCard() {
    return this.deck.cards[0];
  };

  takeTurn(guess) {
    const turn = new Turn(guess, this.deck.cards[0]);
    if(turn.evaluateGuess()) {
      console.log(turn.giveFeedback());
    } else {
      this.incorrectGuesses.push(this.deck.cards[0].id);
      console.log(turn.giveFeedback());
    };
    this.turns++;
    this.deck.cards.push(this.deck.cards.shift());
    turn.currentCard = this.deck.cards[0]
    return turn;
  };

  calculatePercentCorrect() {
    let correctPercent = 1 - this.incorrectGuesses.length / this.turns;
    correctPercent = correctPercent * 100;
    return Math.round(correctPercent);
  };

  endRound() {
    let correctPercent = this.calculatePercentCorrect();
    console.log(`** Round over! ** You answered ${correctPercent}% of the questions correctly!`)
  };
};

module.exports = Round;
