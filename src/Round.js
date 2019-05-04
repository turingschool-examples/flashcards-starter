const Turn = require('./Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.deck.cards[this.turns]
  }

  takeTurn(guess) {
    const card = this.returnCurrentCard();
    const turn = new Turn(guess, card);
    this.turns++;
    !turn.evaluateGuess() ? this.incorrectGuesses.push(card.id) : null;
    return turn.giveFeedback();
  }

  calculatePercentCorrect() {
    return 100 - ((this.incorrectGuesses.length / this.turns) * 100)
  }

  endRound() {
    // eslint-disable-next-line no-console
    this.turns === this.deck.cards.length ? console.log(`** Round over! ** You
    answered ${this.calculatePercentCorrect().toFixed()}% of the questions
    correctly!`) : null;
  }
}

module.exports = Round;


