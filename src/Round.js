class Round {
  constructor(deck) {
    this.deck = deck;
  }

  returnCurrentCard() {
    //returns current card being played
  }

  takeTurn() {
    //updates turns count
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