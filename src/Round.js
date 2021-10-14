const Turn = require('./Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.deck.cards[this.turns];
  }

  takeTurn(userGuess) {
    const turn = new Turn(userGuess, this.returnCurrentCard());
    this.turns ++;
    this.returnCurrentCard();
    const message = turn.giveFeedback();
    if(message === 'incorrect!') {
      this.incorrectGuesses.push(turn.currentCard.id);
    }
    return message;
  }

  calculatePercentCorrect() {
    let percent = Math.round((this.incorrectGuesses.length / this.turns) * 100);
    return percent;
  }

  endRound() {
    const endMessage = `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`;
    console.log(endMessage);
    return endMessage;
  }
}

module.exports = Round;