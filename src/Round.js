const Turn = require("./Turn");

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    let currentCard = this.deck.cards.shift();
    return currentCard;
  }

  takeTurn() {
    let turn = new Turn();
    this.turns++
    //evaluates guesses
    //gives feedback
    //stores ids of incorrect guesses
  }

  caluculatePercentCorrect() {
    //calculates and returns the % of correct guesses
  }

  endRound() {
    //prints "**Round over!**You answered <>% of the questions
    //correctly!"
  }
}


module.exports = Round;