const Turn = require('../src/Turn');

class Round {
  constructor(deck, guess) {
    this.currentCard = deck.cards;
    this.guess = guess;
    this.turns = 0;
    this.incorrectGuesses = []
  }
  returnCurrentCard() {
    return this.currentCard[this.turns]
  }
  takeTurn(guess) {
    this.guess = guess;
    const turn = new Turn(this.guess, this.currentCard[this.turns])
    if (this.guess === this.currentCard[this.turns].correctAnswer) {
      this.turns++;
      return turn.giveFeedback()
    } else {
      this.incorrectGuesses.push(this.currentCard.id)
      this.turns++;
      return turn.giveFeedback()
    }
  }
  calculatePercentCorrect() {
    const correctAnswers =  30 - this.incorrectGuesses.length;
    const correctAnswersPercent = (correctAnswers / 30) * 100;
    return correctAnswersPercent.toFixed(2)
  }
  endRound() {
    const percent = this.calculatePercentCorrect()
    console.log(`** Round over! ** You answered ${percent}% of the questions correctly!`)
    return `** Round over! ** You answered ${percent}% of the questions correctly!`
  }
}

module.exports = Round;
