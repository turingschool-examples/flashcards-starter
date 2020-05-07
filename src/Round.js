const Card = require('./Card');
const Turn = require('./Turn');
const Deck = require('./Deck');

class Round {
  constructor(deck) {
    this.turnCount = 0;
    this.deck = deck;
    this.incorrectGuesses = [];
  }
  returnCurrentCard() {
    return this.deck.cards[this.turnCount]
    // returnCurrentCard: method that returns the current card being played
  }
  takeTurn(guess) {
    if (guess === undefined) {
      return "please make a guess";
    }

    let currentTurn = new Turn(guess, this.returnCurrentCard());
    // let currentGuess = currentTurn.evaluateGuess();
    // currentTurn.evaluateGuess()
    let isCorrect = currentTurn.giveFeedBack();
    // console.log(isCorrect);
    if (isCorrect === 'incorrect') {
      let badGuess = currentTurn.returnCard();
      this.incorrectGuesses.push(badGuess.id);
    }
    // this.deck.splice(0, 1);
    this.turnCount ++;
    return isCorrect
    // takeTurn: method that updates turns count, evaluates guesses, gives feedback,
    //  and stores ids of incorrect guesses
  }
  calculatePercentageCorrect() {
   // calculatePercentCorrect: method that calculates and returns the percentage of correct guesses
   let amountOfIncorrect = this.incorrectGuesses.length;
   let percentageIncorrect = Math.floor(amountOfIncorrect * 100/this.turnCount);
   return 100 - percentageIncorrect;
  }
  endRound() {
  // endRound: method that prints the following to the console: ‘** Round over! ** You answered <>% of the questions correctly!’
  let resultPercentage = this.calculatePercentageCorrect();
  let resultMessage = `** Round over! ** You answered ${resultPercentage}% of the questions correctly!`
  console.log(resultMessage);
  return resultMessage;
  
  }

}
module.exports = Round;

/*
Your Round class should meet the following requirements:



When a guess is made, a new Turn instance is created.
The turns count is updated, regardless of whether the guess is correct or incorrect
The next card becomes current card
Guess is evaluated/recorded. Incorrect guesses will be stored (via the id) in an array of incorrectGuesses
Feedback is returned regarding whether the guess is incorrect or correct


*/