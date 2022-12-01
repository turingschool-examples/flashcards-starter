const Turn = require("./Turn");

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.currentCard = deck.cards[this.turns];
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.currentCard;
  }

  takeTurn(guess) {
    let turn = new Turn(guess, this.currentCard);
    this.turns++;
    this.currentCard = this.deck.cards[this.turns];
    if(!turn.evaluateGuess()) {
      this.incorrectGuesses.push(this.currentCard.id)
    };
    return turn.giveFeedBack();
  }

  calculatePercentCorrect() {
    let correctGuesses = this.turns - this.incorrectGuesses.length;
    let decimal = correctGuesses / this.turns;
    let percent = decimal * 100;
    return parseInt(percent);
  }

  endRound() {
    console.log(`** Round over!** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`);
    return `** Round over!** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`;
  }
}


module.exports = Round;