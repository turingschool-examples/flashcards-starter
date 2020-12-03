const Turn = require('./Turn');

class Round {
  constructor(deck) {
    this.deck = deck.cards;
    this.turns = 0;
    this.incorrectGuesses = [];
    this.cardsPlayed = 0;
  }

  returnCurrentCard() {
    return this.deck[this.cardsPlayed];
  };

  takeTurn(guess) {
    let currentCard = this.returnCurrentCard();
    let turn = new Turn(guess, currentCard);
    let feedback = turn.giveFeedback();
    this.turns++;
    this.cardsPlayed++;
    if (feedback === 'incorrect!') {
      this.incorrectGuesses.push(currentCard.id);
      return feedback;
    } else {
      return feedback;
    }
  };



};

module.exports = Round;
