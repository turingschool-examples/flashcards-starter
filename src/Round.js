const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.incorrectGuesses = [];
    this.turns = 0;
    this.deck = deck;
  }

  returnCurrentCard() {
    return this.deck.cards[0];
  }

  takeTurn(guess) {
    const turn = new Turn(guess, this.deck.cards[0]);
    this.turns++;
    if (turn.evaluateGuess()) {
      let evaluation = turn.evaluateGuess();
      this.nextCard(turn);
      return turn.giveFeedback(evaluation);
    } else {
      let evaluation = turn.evaluateGuess();
      this.incorrectGuesses.push(this.deck.cards[0].id);
      this.nextCard(turn);
      return turn.giveFeedback(evaluation);
    }
  }

  nextCard(turn) {
    this.deck.cards.shift();
    turn.currentCard = this.deck.cards[0];
  }


  calculatePercentCorrect() {
    let correctPercent = 1 - this.incorrectGuesses.length / this.turns;
    correctPercent = correctPercent * 100;
    return Math.round(correctPercent);
  }

  endRound() {
    let correctPercent = this.calculatePercentCorrect();
    console.log(`** Round over! ** You answered ${correctPercent}% of the questions correctly!`);
  }
}

module.exports = Round;
