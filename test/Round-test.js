class Round {
  constructor(deck) {
    this.deck = deck;
    this.turn = 0;
    this.currentCard = {};
    this.correctGuesses = [];
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {

  }

  takeTurn() {

  }

  calculatePercentCorrect() {

  }

  endRound() {
    return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
  }
}