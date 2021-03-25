const Turn = require('../src/Turn');

class Round {
  constructor(deck, currentCard) {
    this.deck = deck;
    this.currentCard = currentCard;
    this.turns = 0;
    this.incorrectGuesses = [];
    this.percentCorrect = 0;
    // Maybe for future iteration add:
    //this.correctGuesses = [];
  }

  returnCurrentCard() {
    this.currentCard = this.deck.cards[this.turns];
    return this.currentCard;
  }

  takeTurn(guess) {
    let turn = new Turn(guess, this.currentCard);
    this.turns++;

    if(!turn.evaluateGuess()) {
      this.incorrectGuesses.push(this.currentCard.id);
      return turn.giveFeedback();
    } else {
      return turn.giveFeedback();
    }
  }

  calculatePercentCorrect() {
    let percent = 100 - (this.incorrectGuesses.length/this.turns * 100);
    this.percentCorrect = Math.ceil(percent);

    return this.percentCorrect;
  }

  endRound() {
    return `** Round over! ** You answered ${this.percentCorrect}% of the questions correctly!`
  }

}

module.exports = Round;
