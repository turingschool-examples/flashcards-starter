class Round {
  constructor(deck) {
    this.deck = deck.cards;
    this.currentCard = deck.cards[0];
    this.turns = 0;
    this.incorrectGuesses = [];
    this.percentCorrect = "";
  }
  returnCurrentCard() {
    this.deck.splice(0, 1);
    this.deck.push(this.currentCard);
    this.currentCard = this.deck[0];
    return this.currentCard;
  }
  takeTurn(turn)  {
    this.turns = (this.turns +1);
    if (turn.evaluateGuess() === false) {
      this.incorrectGuesses.push(`${this.currentCard.id}: ${turn.guess}`);
    }
    this.calculatePercentCorrect();
    console.log(this.percentCorrect);
    this.returnCurrentCard();
  }
  calculatePercentCorrect() {
    var decimal = ((this.turns - this.incorrectGuesses.length) / this.turns);
    var percent = (decimal * 100).toFixed(2);
    this.percentCorrect = `${percent}%`;
  }
  endRound()  {
    console.log(`**Round over!** You answered ${this.percentCorrect} of the questions correctly!`)
  }
}

module.exports = Round;