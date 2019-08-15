const Turn = require('./Turn');
class Round {
  constructor(deck) {
    this.deck = deck;
    this.incorrectGuesses = [];
    this.turns = 0;
  }

  returnCurrentCard() {
    return this.deck.cards[this.turns];
  }

  takeTurn(guess) {
    let turn = new Turn(guess, this.deck.cards[this.turns]);
    let correct = turn.evaluateGuess();
    this.incorrectGuessesHandler(correct);
    this.turns++;
    return turn.giveFeedback();
  }

  incorrectGuessesHandler(isCorrect) {
    if(!isCorrect) {
      this.incorrectGuesses.push(this.deck.cards[this.turns].id);
    }
  }

  calculatePercentCorrect() {
    let numCorrect = this.deck.cards.length - this.incorrectGuesses.length;
    let percentCorrect = (numCorrect / this.deck.cards.length) * 100;
    return percentCorrect;
  }

  endRound() {
    console.log(`** Round over! **`);
    console.log(`** You answered ${this.calculatePercentCorrect()}% of the questions correctly! **`)
  }
}

module.exports = Round;