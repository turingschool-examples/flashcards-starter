const Turn = require("./Turn");

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.deck.deckCards.shift();
  }

  takeTurn(userGuess, card) {
    const turn = new Turn(userGuess, card);
    this.turns++;
    this.returnCurrentCard();
    turn.evaluateGuess();
    if (turn.evaluateGuess() === false) {
      this.incorrectGuesses.push(card.id);
    }
    turn.giveFeedback();
  }

  calculatePercentCorrect() {
    //calculates and returns the % of correct guesses
  }

  endRound() {
    //prints "**Round over!**You answered <>% of the questions
    //correctly!"
  }
}


module.exports = Round;