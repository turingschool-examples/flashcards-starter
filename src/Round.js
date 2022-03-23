var Turn = require('./Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.currentCard = this.returnCurrentCard();
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    this.currentCard = this.deck.cards[this.turns];
    return this.currentCard;
  }

  takeTurn(guess) {
    let newTurn = new Turn(guess, this.currentCard);
    this.turns++;
    this.returnCurrentCard();
    if (guess !== this.currentCard.correctAnswer) {
      this.incorrectGuesses.push(this.currentCard.id);
      return `incorrect!`;
    } else {
      return `correct!`;
    }
    // return newTurn;
  }

  calculatePercentCorrect() {
    if (this.turns === this.incorrectGuesses.length) {
      return `0%`;
    } else {
      return `${this.incorrectGuesses.length / this.turns *100}%`;
    }
  }

}

module.exports = Round;
