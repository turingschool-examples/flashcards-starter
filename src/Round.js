const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');


class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.currentCard = this.deck.cards[this.turns];
    this.incorrectAnswers = [];
  }

  returnCurrentCard = () => {
    return this.currentCard[this.turns];
  }

  takeTurn = (guess) => {
    let currentTurn = new Turn(guess, this.currentCard[this.turns]);
    if(guess !== this.currentCard.correctAnswer) {
      this.incorrectAnswers.push(this.currentCard[this.turns].id)
      this.turns++;
      return 'correct!';
    } else {
      this.turns++
      return 'incorrect!';
    };
    // this.turns++;
    // return currentTurn;
  }

}

module.exports = Round