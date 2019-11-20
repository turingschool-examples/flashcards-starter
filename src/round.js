class Round {
  constructor(deck) {
    this.currentCard = deck[0];
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.currentCard;

  };

  takeTurn(guess) {
    const turn = new Turn(guess, card);
    this.turns ++;
    turn.evaluateGuess();
    if (!turn.match) {
      this.incorrectGuesses.push[this.currentCard.id];
    };
    var removedCard = this.currentCard.shift();
    var newCurrentArray = this.currentCard.push(removedCard);
    this.currentCard = newCurrentArray;
  };

  calculatePercentCorrect() {

  };

  endRound() {

  };
}

module.exports = Round;
