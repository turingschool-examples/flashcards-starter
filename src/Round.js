const Turn = require("./Turn");

class Round {
  constructor(deck) {
    this.deck = deck;
    this.currentCard = deck.cards[0];
    this.turn = null;
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.currentCard;
  }

  takeTurn(guess) {
    this.turn = new Turn(guess, this.currentCard);
    this.turns++;
    this.currentCard = this.deck.cards[this.turns];

    if (!this.turn.evaluateGuess()) {
      this.incorrectGuesses.push(this.turn.card.id);
    }

    return this.turn.giveFeedBack();
  }

  calculatePercentCorrect() {
    const numIncorrect = this.incorrectGuesses.length;
    const numCards = this.deck.cards.length;

    return Math.floor((100 * (numCards - numIncorrect)) / numCards);
  }

  endRound() { 
    const message = `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
    
    console.log(message);
    return message;
  }
}

module.exports = Round;