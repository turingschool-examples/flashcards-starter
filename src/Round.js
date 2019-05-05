const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const turn = require('./Turn');
const game = require('./Game');

class Round {
  constructor(game, deck) {
    this.game = game;
    this.deck = deck || [];
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return deck.shift();
    // will shift just send the card into the ether?
  }

  takeTurn(guess) {
    let turn = this.createTurn(guess);
    this.turns++
    turn.evaluateGuess(guess);
  }

  createTurn(guess) {
    let currentCard = this.returnCurrentCard();
    return new turn(currentCard);
  }

  addIncorrectGuess(turn) {
    if (turn.evaluateGuess() === false) {
      this.incorrectGuesses.push(turn.card.id);
    }
  }
  
  calculatePercentCorrect() {
    let percentIncorrect = this.incorrectGuesses.length / this.deck.length * 100;
    endRound(100 - percentIncorrect);
  }

  endRound(percentage) {
    return `** Round over! ** You answered ${percentage}% of the questions correctly!`;
  }


}

module.exports = Round;

// Your Round class will be the object that takes in responses and records these guesses(as well as if they are correct or incorrect).The currentCard should be the first Card in the Deck(the array of Cards) at the start of the Round

// Your Round class should meet the following requirements:
// returnCurrentCard: method that returns the current card being played
// takeTurn: method that updates turns count, evaluates guesses, gives feedback, and stores ids of incorrect guesses

// ***When a guess is made, a new Turn instance is created.
// needs func to create turn?

// The turns count is updated, regardless of whether the guess is correct or incorrect
// The next card becomes current card
// Guess is evaluated / recorded.Incorrect guesses will be stored(via the id) in an array of incorrectGuesses
// Feedback is returned regarding whether the guess is incorrect or correct
// calculatePercentCorrect: method that calculates and returns the percentage of correct guesses
// endRound: method that prints the following to the console: ‘** Round over! ** You answered <>% of the questions correctly!’
