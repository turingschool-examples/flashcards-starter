const Card = require('./Card');
const Deck = require('./Deck');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turn = 0;
  }

  returnCurrentCard(deck){
    return this.deck.cards[0];
  }

  takeTurn(){
    let turn = new Turn(guess, card);
    increaseTurnCount();
    //method that updates turns count, 
    //evaluates guesses, 
    //gives feedback
    //stores ids of incorrect guesses


// The next card becomes current card
// Guess is evaluated/recorded. Incorrect guesses will be stored (via the id) in an array of incorrectGuesses
// Feedback is returned regarding whether the guess is incorrect or correct
  }
  increaseTurnCount(){
    this.turn++;
  }
  calculatePercentCorrect(){
    // method that calculates and returns the percentage of correct guesses
  }

  endRound(){
    // method that prints the following to the console: ‘** Round over! ** You answered <>% of the questions correctly!’
  }
}

module.exports = Round;