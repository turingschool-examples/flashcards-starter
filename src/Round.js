const Turn = require('../src/Turn');

class Round {
  constructor(deck){
    this.deck = deck;
    this.currentCard = deck.cards[0];
    this.turns = 0;
    this.incorrectGuesses = [];
  }
  returnCurrentCard() {
    return this.currentCard;
  }

  takeTurn(userGuess) {
    const turn = new Turn(userGuess, this.currentCard);
    this.turns++;
    this.currentCard = this.deck.cards[this.turns];
    if(!turn.evaluateGuess()) {
      this.incorrectGuesses.push(this.currentCard.id);
    }
    return turn.giveFeedback();
  }


  calculatePercentCorrect() {
    
  }
}

module.exports = Round;
