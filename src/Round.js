const Turn = require('../src/Turn');

class Round {
  constructor(deck, currentCard) {
    this.deck = deck;
    this.currentCard = currentCard;
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    this.currentCard = this.deck.cards[this.turns];
    return this.currentCard;
  }

  takeTurn(guess) {
    let turn = new Turn(this.guess, this.currentCard);
    this.turns++;

    if(!turn.evaluateGuess()) {
      this.incorrectGuesses.push(this.currentCard.id);
      return turn.giveFeedback();
    } else {
      return turn.giveFeedback();
    }
  }

  calculatePercentCorrect() {
    let percentCorrect = 100 - (this.incorrectGuesses.length/this.turns * 100)
    return percentCorrect;
  }

  // endRound() {
  //   return `** Round over! ** You answered <>% of the questions correctly!`
  // }

}

module.exports = Round;
