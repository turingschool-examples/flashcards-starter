const Turn = require("./Turn");

class Round {
  constructor(deck) {
    this.deck = deck.cards;
    this.currentCard = deck.cards[0];
    this.turnCount = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    this.currentCard = this.deck[this.turnCount];
    return this.currentCard;
  }

  takeTurn(guess) {
    this.turnCount++;
    const turn = new Turn(guess, this.currentCard);
    if (turn.evaluateGuess() === true) {
      this.returnCurrentCard();
      this.endRound();
      return turn.giveFeedback();
    }
    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(this.currentCard.id);
      this.returnCurrentCard();
      this.endRound();
      return turn.giveFeedback();
    }
  }

  calculatePercentCorrect() {
    var numberCorrect = this.turnCount - this.incorrectGuesses.length;
    var percentCorrect = Math.round((numberCorrect / this.turnCount) * 100);
    return percentCorrect;
  }

  endRound() {
    if (this.turnCount === this.deck.length) {
      return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`;
    }
  }
}

module.exports = Round;
