const Deck = require('../src/deck');
const Card = require('../src/Card');
const Turn = require('../src/turn');
// const card1 = new Card(1,
// "What allows you to define a set of related information using key-value pairs?",
// ["object", "array", "function"],
// "object")
// const card2 = new Card(2,
// "What is a comma-separated list of related values?",
// ["array", "object", "function"],
// "array")
// const card3 = new Card(3,
// "What type of prototype method directly modifies the existing array?",
// ["mutator method", "accessor method", "iteration method"],
// "mutator method")
// var allCards = [card1, card2, card3]
// var deck = new Deck(allCards);

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
    var worthPerQuestion = (100 / ((this.correctGuesses.length || 0) + (this.incorrectGuesses.length || 0)))
    var percentIncorrect = ((this.incorrectGuesses.length || 0) * worthPerQuestion)
    var percentCorrect = 100 - percentIncorrect;
    return percentCorrect
  }

  endRound() {
    var worthPerQuestion = (100 / ((this.correctGuesses.length || 0) + (this.incorrectGuesses.length || 0)))
    var percentIncorrect = ((this.incorrectGuesses.length || 0) * worthPerQuestion)
    var percentCorrect = 100 - percentIncorrect;
    console.log(`** Round over! ** You answered ${percentCorrect.toFixed(2)}% of the questions correctly!`);
    return `** Round over! ** You answered ${percentCorrect}% of the questions correctly!`;
  }
}

module.exports = Round;
