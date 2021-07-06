//test if I need this to use th method or if it will work anyway.
const Turn = require('../src/Turn');
// const Deck = require('../src/Deck');

class Round {
  constructor(deck) {
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
    //should I move this.turns back up??
    this.turns += 1;
    //if this is in correct order, do I need to even update this property for this to work in console?
    this.currentCard = this.deck[this.turns];
    return feedback;
  }

}

module.exports = Round;