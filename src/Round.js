const Turn = require('../src/Turn');

class Round {
  constructor(deck){
    this.turns = 0;
    this.deck = deck;
    this.incorrectGuesses = [];
    this.currentTurn;
  }

  returnCurrentCard() {
    return this.deck.cards[this.turns];
  }

  takeTurn(guess) {
    this.currentTurn = new Turn(guess, this.returnCurrentCard());
    this.turns ++;
    if(!this.currentTurn.evaluateGuess()) {
      this.incorrectGuesses.push(this.currentTurn.currentCard.id);
    };
    return this.currentTurn.giveFeedback();;
  }

  calculatePercentCorrect() {
    const incorrectAnswers = this.incorrectGuesses.length;
    const correctAnswers = this.turns - incorrectAnswers;
    return (Math.round(correctAnswers/this.turns * 100));
  }

  endRound() {
    return console.log(`**Round over!** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`);
  }
}

module.exports = Round;
