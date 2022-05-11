class Round {
<<<<<<< HEAD
  constructor(deck, turn) {
    this.deck = deck;
    this.turnCounter = 0;
    this.turn = turn;
    this.incorrectGuesses = [];
    this.correctGuesses = [];
=======
  constructor(card, turn) {
    this.theCard = card;
    this.turnCounter = 0;
    this.turn = turn;
    this.incorrectGuesses = [];
>>>>>>> 696af9d4a5e1307d8266cce2da87376c20cf4f49
  };

  returnCurrentCard() {
    return this.currentCard;
  };

<<<<<<< HEAD
  takeTurn(turn) {
    this.turnCounter += 1;
    // var turn = this.turn;
    // I think this needs to be dynamic
=======
  takeTurn() {
    this.turnCounter += 1;
>>>>>>> 696af9d4a5e1307d8266cce2da87376c20cf4f49

    if (this.turn.evaluateGuess(this.turn.guess) === false) {
      this.incorrectGuesses.push(this.turn.currentCard.id);
      return this.turn.giveFeedback(false)
    } else {
<<<<<<< HEAD
      this.correctGuesses.push(this.turn.currentCard.id);
      return this.turn.giveFeedback(true);
    };
  };

  calculatePercentCorrect() {
    console.log(this.correctGuesses.length)
    console.log(this.turnCounter)
    return ((this.correctGuesses.length) / (this.turnCounter))
  };
=======
      return this.turn.giveFeedback(true);
    };
  };
>>>>>>> 696af9d4a5e1307d8266cce2da87376c20cf4f49
};

module.exports = Round;
