class Round {
  constructor(deck, turn) {
    this.deck = deck;
    this.turnCounter = 0;
    this.turn = turn;
    this.incorrectGuesses = [];
    this.correctGuesses = [];
  };

  returnCurrentCard() {
    return this.currentCard;
  };

  takeTurn(turn) {
    this.turnCounter += 1;
    // var turn = this.turn;
    // I think this needs to be dynamic

    if (this.turn.evaluateGuess(this.turn.guess) === false) {
      this.incorrectGuesses.push(this.turn.currentCard.id);
      return this.turn.giveFeedback(false)
    } else {
      this.correctGuesses.push(this.turn.currentCard.id);
      return this.turn.giveFeedback(true);
    };
  };

  calculatePercentCorrect() {
    console.log(this.correctGuesses.length)
    console.log(this.turnCounter)
    return ((this.correctGuesses.length) / (this.turnCounter))
  };
};

module.exports = Round;
