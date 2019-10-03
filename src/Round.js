const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
  }
  
  returnCurrentCard() {
    return this.deck.cards[0];
  }

  takeTurn(guess) {
    let currentCard = this.returnCurrentCard();
    const turn = new Turn(guess, currentCard);
    this.turns++;
    if (turn.giveFeedback() === 'incorrect!') {
      this.incorrectGuesses.push(currentCard.id);
    };
    this.deck.cards.shift();
    return turn.giveFeedback();  
  }

  calculatePercentCorrect() {
    return Math.floor(100 - ((this.incorrectGuesses.length / this.turns) * 100));
  }

  endRound() {
    console.log(`**Round over!** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`);
    return `**Round over!** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
  }
}

module.exports = Round;
