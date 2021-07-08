class Round {
  constructor(deck, turns = 0, incorrectGuesses = []) {
    this.deck = deck;
    this.turns = turns;
    this.incorrectGuesses = incorrectGuesses;
  }
  returnCurrentCard() {
      return this.deck.cards[this.turns];

  takeTurn(guess) {
    const currentCard = this.returnCurrentCard();
    const turn = new Turn(guess, currentCard);
    this.turns++;
    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(turn.card.id);
    }
  }
  calculatePercentCorrect() {

  }
  endRound() {

  }
}

module.exports = Round;
