const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turnCount = 0;
    this.incorrectGuesses = [];
  }

  takeTurn(guess) {
    const turn = new Turn(guess, this.returnCurrentCard());
    let currentCard = this.returnCurrentCard();
    this.turnCount++;

    if (turn.evaluateGuess() === false) { this.incorrectGuesses.push(currentCard.id);
    }
    return turn.giveFeedback();
  }

  returnCurrentCard() {
    return this.deck.cards[this.turnCount];
  }

  calculatePercentCorrect() {
    let percent = (this.turnCount - this.incorrectGuesses.length) / this.turnCount;
    return percent === 0 ? 0 : parseInt((percent * 100).toFixed(0));
  }

  endRound() {
    console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`)

    return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
  }
}

module.exports = Round;
