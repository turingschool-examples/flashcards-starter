const Turn = require('./Turn');

class Round {
  constructor(deck) {
    this.deck = deck.cards;
    this.currentCard = deck.cards[0];
    this.turns = 0;
    this.incorrectGuesses = [];
  }
  returnCurrentCard() {
    return this.currentCard;
  }
  takeTurn(guess) {
    this.turns += 1;
    let turn = new Turn(guess, this.currentCard);
    this.currentCard = this.deck[this.turns];
    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(turn.currentCard.id);
    }
    return turn.giveFeedback();
  }
  calculatePercentCorrect() {
    if (this.turns === 0) {
      return 0;
    }
    else {
      let correctGuesses = this.turns - this.incorrectGuesses.length;
      let percentage = 100 * (correctGuesses / this.turns);
      return Math.round(percentage);
    }
  }
  endRound() {
    let message = `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`;
    console.log(message);
    return message;
  }
}

module.exports = Round;
