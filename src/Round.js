const Turn = require("./Turn");

class Round {
  constructor(deck) {
    this.deck = deck;
    this.currentCard = deck.cards[0];
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  takeTurn(guess) {
    const turn = new Turn(guess, this.currentCard);
    let result = turn.evaluateGuess()
    if(!result) {
      this.incorrectGuesses.push(this.currentCard.id);
    }
    this.turns++;
    this.currentCard = this.deck.cards[this.turns];
    return turn.giveFeedback();
    
  }

  returnCurrentCard() {
    return this.currentCard;
  }

  calculatePercentCorrect() {
    return ((this.turns - this.incorrectGuesses.length) / this.turns) * 100;
  }

  endRound() {
    console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`);
  }
}

module.exports = Round;