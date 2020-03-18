class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    if(this.turns === 0) {
      return this.currentCard = this.deck.allCards[0];
    } else {
      return this.currentCard = this.deck.allCards[this.turns];
    }
  }

  takeTurn(guess) {
    this.turns++;
    let rightAnswer = this.currentCard['correctAnswer']
    if (guess === rightAnswer) {
      return 'correct!'
    } else {
      this.incorrectGuesses.push(this.currentCard.id);
      return 'incorrect!'
    }
    this.currentCard = this.deck.allCards[this.turns];
  }

  calculatePercentCorrect() {
    let correctGuesses = this.deck.allCards.length -this.incorrectGuesses.length;
    let percentageCorrect = (correctGuesses/this.deck.allCards.length) * 100;

    return Math.floor(percentageCorrect);
  }

  endRound() {
    console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()} of the questions correctly!`)
    return `** Round over! ** You answered ${this.calculatePercentCorrect()} of the questions correctly!`
  }
}

module.exports = Round;
