const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turn;
    this.currentCard = this.deck.cards[0];
    this.nextCard = {}
    this.turnCount = 0;
    this.incorrectGuesses = [];
    this.percentage = 0;
  }
  returnCurrentCard() {
    this.currentCard = this.deck.cards.shift()
    this.nextCard = this.deck.cards[0]
    return this.currentCard
  }
  takeTurn(userGuess) {
    this.turnCount++
    this.returnCurrentCard()
    this.turn = new Turn(userGuess, this.currentCard);
    if (this.currentCard.correctAnswer !== userGuess) {
      this.incorrectGuesses.push(this.currentCard.id)
      this.turn.giveFeedback()
    } else {
        this.turn.giveFeedback()
    }
  }
  calculatePercentageCorrect() {
    this.percentage = (this.incorrectGuesses.length /this.turnCount) * 100;

    return this.percentage
  }
  endRound() {
    return `** Round over! ** You answered ${this.percentage}% of the questions correctly!`
  }
}

module.exports = Round;
