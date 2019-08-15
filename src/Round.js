const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck.cards;
    this.turns = 0;
    this.currentCard;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
   this.currentCard = this.deck[this.turns];
   return this.currentCard;
    
  }

  takeTurn(guess) {
    let turn = new Turn(guess, this.returnCurrentCard())
    this.turns ++;
    if(turn.evaluateGuess()=== false) {
      this.incorrectGuesses.push(this.currentCard.id)
    }
    return turn.giveFeedback();
  }

  calculatePercentCorrect() {
    return Math.round(100-((this.incorrectGuesses.length/this.turns) * 100))

  }

  endRound() {
    return 'Round over! You answered ' + this.calculatePercentCorrect() + '%' + ' of the questions correctly!'
  }
}






module.exports = Round;

// endRound: method that prints the following to the console: ‘** Round over! ** You answered <>% of the questions correctly!’

// takeTurn: method that updates turns count, evaluates guesses, gives feedback, and stores ids of incorrect guesses

// When a guess is made, a new Turn instance is created.

// The turns count is updated, regardless of whether the guess is correct or incorrect

// The next card becomes current card
// Guess is evaluated/recorded. Incorrect guesses will be stored (via the id) in an array of incorrectGuesses
// Feedback is returned regarding whether the guess is incorrect or correct