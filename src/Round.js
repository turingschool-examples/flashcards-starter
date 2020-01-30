const Turn = require('./Turn.js');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.incorrectGuesses = [];
    this.turns = 0;
    // this.currentCard = this.deck.cards[this.turns];

  }
  returnCurrentCard() {
    return this.deck.cards[this.turns];

  }
  takeTurn(guess, card) {
    let currentTurn = new Turn(guess, this.deck.cards[this.turns]);
    if (!currentTurn.evaluateGuess()) {
      this.incorrectGuesses.push(currentTurn.card.id)
    }
    this.turns++;
    return currentTurn.giveFeedback();
  }
  calculatePercentCorrect() {
    var incorrectGuesses = Math.round((this.incorrectGuesses.length / this.turns) * 100);
    return 100 - incorrectGuesses;
  }
  endRound() {
    let result = `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`;
    console.log(result);
    return result;
  }
}

module.exports = Round;
