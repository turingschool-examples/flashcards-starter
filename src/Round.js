const Turn = require('../src/Turn');
class Round {
  constructor(deck) {
    this.allCards = deck.allCards;
    this.currentCard = deck.allCards[0];
    this.turns = 0;
    this.incorrectGuesses = [];
    this.correctGuesses = [];
    this.correctGuessPercentage = 0;
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
    this.correctGuessPercentage += Math.floor(this.turns/(this.correctGuesses.length / this.incorrectGuesses.length));
    return this.correctGuessPercentage;
  }
  endRound() {
    console.log(`** Round over! ** You answered ${this.correctGuessPercentage}% of the questions correctly!`);
  }
};

module.exports = Round;
