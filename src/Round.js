const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
  };

  returnCurrentCard() {
    return this.deck.cards[this.turns]
  };

  takeTurn(guess) {
    var currentCard = this.returnCurrentCard();
    var turn = new Turn(guess, currentCard);
     this.turns++;
     if(turn.giveFeedBack() === 'incorrect!') {
      this.incorrectGuesses.push(currentCard.id)
     }
     return turn.giveFeedBack();
  };

  calculatePercentCorrect() {
    // return parseInt((100 - (this.incorrectGuesses.length / this.turns * 100)));

    var percentage =(100 - (this.incorrectGuesses.length / this.turns * 100));
    return percentage.toFixed(2);
  };
};













module.exports = Round;