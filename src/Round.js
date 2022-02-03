const Turn = require('./Turn');
class Round {
  constructor(deck) {
    this.deck = deck;
    this.turnCount = 0;
    this.incorrectGuesses = [];
    this.correctGuesses = 0;
    this.result = true;
  };

  returnCurrentCard() {
    return this.deck.cards[0]
  };

  takeTurn(guess) {
    let turn = new Turn(guess, this.returnCurrentCard())
    this.turnCount++
    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(turn.card)
      this.result = false
      return 'incorrect';
    } else {
      this.correctGuesses += 1
      this.result = true
      return 'correct!'
    }
  }

  calculatePercentCorrect() {
    var sum = (this.turnCount - this.incorrectGuesses.length) / this.turnCount;
    return (Math.floor(sum * 100 ))
  }

  endRound() {
    console.log((`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`))
    return (`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`)
  }

  };






module.exports = Round;
