const Deck = require('../src/deck');
const Turn = require('../src/turn');

class Round {
  constructor(deck) {
    this.currentDeck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
    this.correctGuesses = [];
    if (this.turns === 30) {
      endRound();
    }
  }

  returnCurrentCard() {
    return this.currentDeck.cards[0];
  }

  takeTurn(guess) {
    var turn = new Turn(guess, this.currentDeck.cards[0].correctAnswer)
    this.turns += 1;
    if (turn.guess === this.currentDeck.cards[0].correctAnswer) {
      var correctCard = this.currentDeck.cards.shift();
      this.correctGuesses.unshift(correctCard);
        return turn.giveFeedback(turn.guess, this.correctGuesses[0]);
    } else var incorrectCard = this.currentDeck.cards.shift();
      this.incorrectGuesses.unshift(incorrectCard);
      return turn.giveFeedback(turn.guess, this.incorrectGuesses[0]);
  }

  calculatePercentCorrect() {
    var worthPerQuestion = (100 / ((this.correctGuesses.length || 0)
      + (this.incorrectGuesses.length || 0)))
    var percentIncorrect = ((this.incorrectGuesses.length || 0)
      * worthPerQuestion)
    var percentCorrect = 100 - percentIncorrect;
    return percentCorrect
  }

  endRound() {
    var worthPerQuestion = (100 / ((this.correctGuesses.length || 0)
      + (this.incorrectGuesses.length || 0)))
    var percentIncorrect = ((this.incorrectGuesses.length || 0)
      * worthPerQuestion)
    var percentCorrect = 100 - percentIncorrect;
    console.log('** Round over! ** You answered ' + percentCorrect.toFixed(2)
    + '% of the questions correctly!');
  }
}

module.exports = Round;
