const Card = require('./Card');
const Deck = require('./Deck');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turn = 0;
    this.percentage = 0;
  }

  returnCurrentCard(deck){
    return this.deck.cards[0];
    //if this.deck.length === 3
  }

  takeTurn(){
    let turn = new Turn(guess, card);
    increaseTurnCount();
    turn.evaluateGuess(guess, card); 
    turn.giveFeedback();


// The next card becomes current card
// Guess is evaluated/recorded. Incorrect guesses will be stored (via the id) in an array of incorrectGuesses
  }
  increaseTurnCount(){
    this.turn++;
  }
  calculatePercentCorrect(){
    // method that calculates and returns the percentage of correct guesses
     this.percentage = incorrectCardIds.length/3;
  }

  endRound(){
    return `** Round over! ** You answered ${this.percentage}% of the questions correctly!`
  }
}

module.exports = Round;