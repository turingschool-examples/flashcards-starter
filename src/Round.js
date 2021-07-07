//test if I need this to use th method or if it will work anyway.
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');

class Round {
  constructor(deck) {
    //should I change this to deck.cards? //and accomp tests? 
    this.deck = deck;
    this.turns = 0;
    this.currentCard = this.deck[this.turns];
    this.incorrectGuesses = [];
    //do we need a this.guess???? any reason?
    this.currentTurn;
  }

  returnCurrentCard() {
    return this.currentCard;
  }

  takeTurn(id) {
    this.currentTurn = new Turn(id, this.currentCard);

    const feedback = this.currentTurn.giveFeedback();
    if (feedback === 'incorrect!') {
      this.incorrectGuesses.push(this.currentCard.id);
    }

    this.turns += 1;
    //should I move this.turns back up??
    //if this is in correct order, do I need to even update this property for this to work in console?
    this.currentCard = this.deck[this.turns];
    return feedback;
  }

  calculatePercentCorrect() {
    const percentage = Math.floor(((this.turns - this.incorrectGuesses.length) / this.turns) * 100) ;

    return percentage;
  }

  endRound() {
    console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`)
  }

}

module.exports = Round;