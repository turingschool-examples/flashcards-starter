class Round {
  constructor(card, turn) {
    this.theCard = card;
    this.turnCounter = 0;
    this.turn = turn;
    this.incorrectGuesses = [];
  };

  returnCurrentCard() {
    return this.currentCard;
  };

  takeTurn() {
    this.turnCounter += 1;

    if (this.turn.evaluateGuess(this.turn.guess) === false) {
      this.incorrectGuesses.push(this.turn.currentCard.id);
      return this.turn.giveFeedback(false)
    } else {
      return this.turn.giveFeedback(true);
    };
  };
};

module.exports = Round;
