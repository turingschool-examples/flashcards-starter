const Card = require('./Card');
const Data = require('./Data');
const Deck = require('./Deck');
const Turn = require('./Turn');

class Round{
  constructor(deck,currentCard) {
    this.deck = deck;
    this.currentCard = currentCard;
    this.turns = 0;
    this.correctGuesses = [];
    this.incorrectGuess = [];
  }

  returnCurrentCard(){
    
    const currentCard = this.deck.cards[this.turns];
    return currentCard;
  }

  takeTurn(guess){
    const turn = new Turn(guess, this.returnCurrentCard())

    if(turn.evaluateGuess() === false ){
      this.incorrectGuess.push(this.returnCurrentCard().id)
    } else {
      this.correctGuesses.push(this.returnCurrentCard().id)
    }
      this.turns++
  }

  calculatePercentCorrect() {
    const percentage = (this.correctGuesses.length / this.turns) * 100;
    
    return Math.round(percentage) + '%'
  }

  endRound(){
    return `** This round is over! ** You answered ${this.calculatePercentCorrect()} of the questions correctly!`
  }



}

module.exports = Round;