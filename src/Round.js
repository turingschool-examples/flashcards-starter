class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.currentCard = this.deck.cards[this.turns];
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    let current = this.currentCard;
    this.takeTurn();
    return current;
  }

  takeTurn(guess) {

    let result, id;
    if (guess === this.currentCard.correctAnswer) {
      result = 'correct!'
    } else {
      this.incorrectGuesses.push(this.deck.cards[this.turns].id)
      result = 'incorrect!'
    }
    this.turns++;
    return result;
  }


}

module.exports = Round;