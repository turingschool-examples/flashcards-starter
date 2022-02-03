const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.currentCard = deck.cards[0];
    this.turns = 0;
    this.incorrectGuesses = [];
  };
  returnCurrentCard() {
    this.currentCard = this.deck.cards[this.turns];
    return this.currentCard;
  };
  takeTurn(guess) {
    let turn = new Turn(guess, this.currentCard);
    this.returnCurrentCard();
    this.turns += 1;
    //if evaluateGuess is not true
    if (!turn.evaluateGuess()) {
      //push current card to incorrectGuesses array
      this.incorrectGuesses.push(this.currentCard.id);
      //invoke giveFeedback function
      return turn.giveFeedback();
      //if its false, invoke giveFeedback function
    } else {
      return turn.giveFeedback();
    }
  };
  calculatePercentCorrect() {
    //create new variable for correct answers
    //whatever turn it is minus the length of the incorrectGuesses array
    let correctAnswers = this.turns - this.incorrectGuesses.length;
    //create new variable for percent of correct answers
    //correct answers divided by the number of turns x 100
    let percentCorrect = ((correctAnswers / this.turns) * 100);
    //return percent correct variable
    return percentCorrect;
  };
  endRound() {
    return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`;
  }
};


module.exports = Round;
