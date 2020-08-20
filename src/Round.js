const Turn = require('./Turn');

class Round {
  constructor(deck) {
    this.incorrectGuesses = [];
    this.deck = deck;
    this.turnCount = 0;

  }

  returnCurrentCard(){
    return this.deck.card[this.turnCount]
  }

  takeTurn(guess){
    const card = this.returnCurrentCard();
    const turn = new Turn(guess,card);
    this.turnCount++;
    if(!turn.evaluateGuess()) this.incorrectGuesses.push(card.id);
    return turn.giveFeedback();
  }

  calculatePercentCorrect(){
    const correctGuesses = this.turnCount - this.incorrectGuesses.length
    return `${Math.round(correctGuesses /this.turnCount * 100)}%`
  }

  endRound(){
    return `** Round over! ** ${this.calculatePercentCorrect()} of the questions correctly!`
  }
}

module.exports = Round;
