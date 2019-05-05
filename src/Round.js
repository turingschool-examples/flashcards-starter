const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck || [];
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.deck.cards[this.turns];
  }

  takeTurn(guess) {
    const currentCard = this.returnCurrentCard()
    const turn = new Turn(guess,currentCard);
    if (turn.evaluateGuess() === false) {
    this.incorrectGuesses.push(currentCard.id)
    }
    this.increaseTurn();
    this.returnCurrentCard();
    return turn.giveFeedback();
  }

  increaseTurn() {
    this.turns++;
  }

  calculatePercentCorrect() {
    let totalCards = this.deck.countCards();
    let numberWrongGuesses = this.incorrectGuesses.length
    return Math.floor(((totalCards - numberWrongGuesses) / totalCards) * 100)
  }

  endRound() {
    console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`)
  }

}

module.exports = Round;