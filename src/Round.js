const Turn = require('./Turn');

class Round {
  constructor(deck) {
    this.deck = deck.deck;
    this.turns = 0;
    this.currentCard = this.deck[this.turns];
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.currentCard;
  };

  takeTurn(guess) {
    const turn = new Turn(guess, this.currentCard);
    this.turns ++;
    if(!turn.evaluateGuess() && this.turns < this.deck.length) {
      this.incorrectGuesses.push(this.currentCard.id);
    }else if(!turn.evaluateGuess() && this.turns === this.deck.length) {
      this.incorrectGuesses.push(this.currentCard.id);
      this.endRound();
    } else if(turn.evaluateGuess() && this.turns === this.deck.length) {
      this.endRound();
    }
    this.currentCard = this.deck[this.turns];
    return turn.returnFeedback();
  };

  calculatePercentCorrect() {
    return Math.round(((this.turns - this.incorrectGuesses.length) / this.turns) * 100);
  };

  endRound() {
    console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`)
  };
}

module.exports = Round;
