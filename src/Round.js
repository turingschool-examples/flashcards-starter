const Turn = require('../src/Turn');
class Round {
  constructor(deck) {
    this.allCards = deck.allCards;
    this.currentCard = deck.allCards[0];
    this.turns = 0;
    this.incorrectGuesses = [];
    this.correctGuesses = [];
  }
  returnCurrentCard() {
    return this.currentCard;
  }
  takeTurn(userGuess) {
    this.turns ++;
    let removeCard = this.allCards.shift();
    this.currentCard = removeCard;
    const turn = new Turn(userGuess, this.currentCard);
    // const evaluateGuess = turn.evaluateGuess();
    this.addIncorrectAnswersId(turn.evaluateGuess());
    return turn.giveFeedback();
  }
  addIncorrectAnswersId(badGuess) {
    if (!badGuess) {
      this.incorrectGuesses.push(this.currentCard.id)
    } else {
      this.correctGuesses.push(this.currentCard.id);
    }
  }
  calculatePercentCorrect() {
    return Math.floor((this.correctGuesses.length / this.turns) * 100);
  }
  endRound() {
    console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`)
    return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
  }
}

module.exports = Round;
