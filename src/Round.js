const Turn = require('../src/Turn')

class Round {
  constructor(deck){
    this.deck = deck
    this.currentCard = deck.cards[0]
    this.turns= 0;
    this.incorrectGuesses = [];
  }
  returnCurrentCard() {
    return this.currentCard
  }
  takeTurn(guess) {
    const currentTurn = new Turn(guess, this.currentCard)
    this.turns ++
     if(!currentTurn.evaluateGuess()) {
       this.incorrectGuesses.push(this.currentCard.id)
     }
     this.currentCard = this.deck.cards[this.turns];
     this.returnCurrentCard()
     return currentTurn.giveFeedback()
  }
  calculatePercentCorrect() {
    let percent = Math.ceil(((this.turns - this.incorrectGuesses.length) / this.turns) *100);
    return percent;
  }
  endRound() {
    return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
  }
}

module.exports = Round;
