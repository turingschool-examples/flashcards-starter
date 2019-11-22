const Turn = require('../src/turn');


class Round {
  constructor(deck) {
    this.turn = 0;
    this.deck = deck;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.deck.cards[this.turn];
  }

  takeTurn(guess) {
    const currentCard = this.returnCurrentCard()
    const turn = new Turn(guess, currentCard);
    this.turn++;
    const trueOrFalse = turn.evaluateGuess(guess, currentCard.correctAnswer);
    const message = turn.giveFeedback(guess, currentCard.correctAnswer);
    if (trueOrFalse === false) {
      this.incorrectGuesses.push(currentCard.id);
    }
    return trueOrFalse + ', ' + message;
  }

  calculatePercentCorrect() {
    const answeredCorrect = this.turn - this.incorrectGuesses.length;
    return Math.floor((answeredCorrect / this.turn) * 100);
  }

  endRound() {
    console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`);
    process.exit();
  }
}


module.exports = Round;
